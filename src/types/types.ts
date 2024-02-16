// context types

export interface UserContextType {
    user: string,
    updateUser: (newUser: string) => void
}

// user types

export interface UserData {
    username: string
    avatar: string,
    name: string,
    location: string,
    biography: string
    joined_at: string
    public_repos: number,
    url: string
}

export interface UserDataResponse {
    avatar_url: string,
    name: string,
    location: string,
    bio: string,
    login: string,
    created_at: string
    public_repos: number,
    html_url: string
}

// repo types

export interface RepositoryData {
    name: string,
    description: string,
    language: string,
    homepage: string,
    html_url: string
}

export interface RepositoryDataResponse {
    name: string,
    description: string,
    language: string,
    homepage: string,
    html_url: string
}


// service types
export type UserServiceFunction = <T>(username: string) => { call: Promise<T>, controller: AbortController }