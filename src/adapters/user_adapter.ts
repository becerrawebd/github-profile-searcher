import { UserData, UserDataResponse } from "../types/types";

export function adaptUser(user: UserDataResponse){
    const adaptedUser: UserData = {
        name: user.name,
        avatar: user.avatar_url,
        username: user.login,
        biography: user.bio,
        location: user.location,
        joined_at: user.created_at,
        public_repos: user.public_repos,
        url: user.html_url
    }
    return adaptedUser
}