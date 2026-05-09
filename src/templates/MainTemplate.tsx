import { Outlet } from 'react-router-dom'
import MainHeader from '../components/MainHeader'

export default function MainTemplate() {
  return (
    <>
      <MainHeader />
      <main>
        <Outlet />
      </main>
    </>
  )
}