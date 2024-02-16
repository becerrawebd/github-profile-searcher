import { useContext } from 'react'
import { GithubUserContext } from '../../context/GithubUserContext'
import { useFetch } from '../../hooks/useFetch'
import { RepositoryData, RepositoryDataResponse } from '../../types/types'
import RepoListItem from './RepoListItem'
import { adaptRepositoryList } from '../../adapters/repository_adapter'
import Spinner from '../Spinner/Spinner'


const defaultData: RepositoryData[] = []

export default function RepoList() {
    const { user } = useContext(GithubUserContext)
    const { data, loading } = useFetch<RepositoryDataResponse[],RepositoryData[]>(`/users/${user}/repos`, defaultData, adaptRepositoryList)
    
    return (
        <ul className='divide-y-2 divide-primary bg-white rounded-lg px-14'>
            { 
                loading ? <Spinner /> :
            data.map(repo => (<RepoListItem key={repo.name} repo={repo} />)) }
        </ul>
    )
}
