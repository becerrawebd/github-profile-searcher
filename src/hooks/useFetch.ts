import { useEffect, useState } from "react";
import { axiosInstance } from "../config/axios.config";

type ParseDataCallback<U,T> = (data: U) => T


export function useFetch<U,T>(url: string, defaultData: T, parseData: ParseDataCallback<U,T>){
    const [error,setError] = useState<Error|null>(null)
    const [data, setData] = useState<T>(defaultData)
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        function execFetch(url: string){
            const abortController = new AbortController()
            setLoading(true)
            setError(null)  
            axiosInstance.get(url, { signal: abortController.signal})
                .then(async res => {
                    if(res.status != 200){
                        throw new Error(res.data.message)
                    }
                    const parsedData = parseData(res.data)
                    setData(parsedData)
                })
                .catch(error => setError(error))
                .finally(() => setLoading(false))
            return { abortController }
        }
        const { abortController } = execFetch(url)
        return () => abortController.abort()
    },[url,parseData])

    return {
        data,
        error,
        loading,
    }

}