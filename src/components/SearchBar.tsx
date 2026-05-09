import MagnifyingGlass from "../../public/icons/magnifying_glass_1.svg?react";

type SearchBarProps = {
  className?: string
}

export default function SearchBar({className}: SearchBarProps) {
  return (
    <label className={`not-dark:bg-element-light dark:bg-element-dark border-3 border-solid rounded-xl not-dark:border-element-border-light dark:border-element-border-dark flex items-center w-full h-full pl-10 focus-within:not-dark:border-element-border-active-light focus-within:dark:border-element-border-active-dark hover:cursor-text ${className}`}>
      <input className='bg-transparent rounded-xl w-full self-center h-full focus:outline-none not-dark:text-text-light dark:text-text-dark' type='text' placeholder='Search...' />
      <MagnifyingGlass className='bg-transparent self-center inline h-1/2 mr-15 w-fit not-dark:fill-text-light dark:fill-text-dark' />
    </label>
  )
}
