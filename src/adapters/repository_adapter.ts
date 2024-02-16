import { RepositoryDataResponse, RepositoryData } from "../types/types"


export function adaptRepositoryList(repositoryList: RepositoryDataResponse[]): RepositoryData[]{
    const adaptedRepositoryList: RepositoryData[] = repositoryList.map(repository => ({
        name: repository.name,
        description: repository.description,
        homepage: repository.homepage,
        html_url: repository.html_url,
        language: repository.language
    }))
    return adaptedRepositoryList
}