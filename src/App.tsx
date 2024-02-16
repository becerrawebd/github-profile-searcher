import ProfileSummary from './components/ProfileSummary/ProfileSummary'
import SearchBar from './components/SearchBar/SearchBar'
import GithubUserContextProvider from './context/GithubUserContext'
import RepoList from './components/Repos/RepoList'
import { SnackbarProvider } from 'notistack'


function App() {

  return (
    <SnackbarProvider>
      <div className='container mx-auto my-8 flex flex-col gap-y-8 max-w-5xl'>
        <GithubUserContextProvider>
          <SearchBar />
          <ProfileSummary />
          <RepoList />
        </GithubUserContextProvider>
      </div>
    </SnackbarProvider>
  )
}

export default App
