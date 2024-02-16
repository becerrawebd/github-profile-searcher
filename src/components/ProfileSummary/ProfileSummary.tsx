import { useContext, useEffect } from 'react'
import { adaptUser } from "../../adapters/user_adapter"
import { GithubUserContext } from '../../context/GithubUserContext'
import { useFetch } from '../../hooks/useFetch'
import { UserData, UserDataResponse } from '../../types/types'
import { formatDateDDMMYY } from '../../utilities/format-date-ddmmyy.utility'
import Spinner from '../Spinner/Spinner'
import { enqueueSnackbar } from 'notistack'

const defaultData: UserData = {
  avatar: '',
  biography: '',
  joined_at: '',
  location: '',
  name: '',
  public_repos: 0,
  username: 'github',
  url: ''
}

export default function ProfileSummary() {

  const { user } = useContext(GithubUserContext)

  const { data,loading,error } = useFetch<UserDataResponse, UserData>(`/users/${user}`, defaultData, adaptUser)


  useEffect(() => {
    if(error){
      enqueueSnackbar('User not found', { variant: "warning", className: 'bg-primary'})
    }
  },[error])

  return (
    <div className='p-4 md:p-0 rounded-lg bg-white flex flex-col md:flex-row items-center md:justify-center gap-y-6 gap-x-6 md:overflow-hidden'>
      {
        loading ? <Spinner /> :
          <>
            <img src={data.avatar} className='md:shrink-0 md:basis-1/4 h-48 w-48 rounded-full md:rounded-none md:h-auto object-cover md:self-stretch' alt='Profile Image'></img>
            <div className='grid grid-cols-1 md:grid-cols-[1fr_1fr] grid-rows-[auto_auto_auto] md:grid-rows-[auto_auto] gap-y-4 md:gap-y-0 md:flex-grow'>
              <div className='flex flex-col md:row-span-1 items-center justify-center gap-y-1'>
                <h1 className='text-2xl font-bold leading-4 text-primary'>{data.name || 'No name'}</h1>
                <a href={data.url} target='_blank'>
                  <span className='text-gray-500 font-bold hover:text-primary'>
                    &rarr; Go to profile
                  </span></a>
              </div>
              <p className='md:row-span-1 md:col-start-1 md:col-end-1 text-center'>{data.biography || 'No bio'}</p>
              <ul className='flex flex-col items-start md:col-start-2 md:row-start-1 md:row-end-3 divide-y-2 divide-primary'>
                <span className='py-4'>📍{data.location || 'No location'}</span>
                <span className='block py-4'>📅 Joined: <span>{formatDateDDMMYY(data.joined_at)}</span></span>
                <span className='block py-4'>💼 Public Repositories: <span>{data.public_repos}</span></span>
              </ul>
            </div>
          </>
      }
    </div>
  )
}
