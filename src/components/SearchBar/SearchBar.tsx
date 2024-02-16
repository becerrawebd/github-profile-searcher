import { FormEvent, useContext } from "react"
import { GithubUserContext } from "../../context/GithubUserContext"

export default function SearchBar(){

    const { updateUser } = useContext(GithubUserContext)


    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const user = formData.get('user')
        if(!user){
            return
        }
        updateUser(user as string)
    }

    return <form onSubmit={handleSubmit} className="p-4 rounded-lg bg-white flex flex-col md:flex-row justify-center gap-y-4 md:gap-x-8">
        <input name="user" type="text" className="bg-gray-200 rounded-lg text-3xl py-2 px-4 focus:outline-none font-bold" />
        <button className="bg-primary px-4 py-2 text-xl rounded-lg text-white hover:bg-primary-dark transition-colors duration-300" type="submit">
            Search Github
        </button>
    </form>
}