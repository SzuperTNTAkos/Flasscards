import NavButton from '../components/NavButton'
import SearchBar from '../components/SearchBar'
export default function Home() {
  return (
    <div className='home'>
      <nav className='flex flex-wrap items-center'>
        <NavButton className='mr-10' name='Create new' to='/create' />
        <NavButton className='mr-10' name='Search globally' to='/search' />
        <NavButton className='mr-10' name='Scan QR code' to='/qr' />
        <NavButton className='mr-0' name='Import from quizlet' to='/import' />
      </nav>
      <div className='mt-12 flex items-center h-50'>
        <h2 className='pr-15 text-text text-2xl font-bold'>History:</h2>
        <SearchBar />
      </div>
    </div>
  )
}

