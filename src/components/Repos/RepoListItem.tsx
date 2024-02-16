import { RepositoryData } from '../../types/types'

interface RepoListItemProps {
    repo: RepositoryData
}

export default function RepoListItem({ repo }: RepoListItemProps) {
    const { name, description, homepage, html_url, language } = repo
    return (

        <div className='flex flex-col items-start space-x-6 py-6 px-10 gap-y-4'>
            <h2 className='font-bold text-primary'>{name}</h2>
            <span>{description || 'No description'}</span>
            {language && <span className='font-light'>💻 {language}</span>}
            <a href={html_url} target='_blank' className='font-bold text-primary hover:text-primary-dark transition-colors duration-300'>&rarr; Open repository</a>
            {homepage && <a href={homepage} target='_blank' className='font-bold text-primary hover:text-primary-dark transition-colors duration-300'>&rarr; Open Demo</a>}
        </div>
    )
}
