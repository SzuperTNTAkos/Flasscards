import NavButton from '../components/NavButton'
import SearchBar from '../components/SearchBar'
import { useEffect, useState } from 'react'
export default function Home() {
  const [message, setMessae] = useState('msg')
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/message/")
    .then(response => response.json())
    .then(data => {setMessae(data.message)})
  }, [])

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
      <h1 className='text-white'>The very tuff msg from the big jango: {message}</h1>
    </div>
  )
}

