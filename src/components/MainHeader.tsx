export default function MainHeader() {
  return (
    <header className='flex items-center p-10 pl-15 border-3 border-solid not-dark:border-header-border-light dark:border-header-border-dark not-dark:bg-header-light dark:bg-header-dark m-0 mb-8 h-fit rounded-xl box-border'>
      <img className='bg-transparent inline h-40 rounded-xl' src='icons/flasscards_logo_1.svg' alt='Flasscards logo'/>
      <h1 className='bg-transparent inline ml-15 not-dark:text-text-light dark:text-text-dark text-3xl font-bold'>Flasscards</h1>
      <button className='bg-transparent ml-auto p-0 h-40 rounded-full'>
        <img className='bg-transparent h-full rounded-full hover:cursor-pointer' src='icons/blank_profile_1.svg' alt='settings' />
      </button>
    </header>
  )
}
