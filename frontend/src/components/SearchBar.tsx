import MagnifyingGlass from "../../public/icons/magnifying_glass_1.svg?react";

type SearchBarProps = {
  className?: string
}

export default function SearchBar({className}: SearchBarProps) {
  return (
    <label className={`bg-element border-3 border-solid rounded-xl border-element-border flex items-center w-full h-full pl-10 focus-within:border-element-border-active hover:cursor-text ${className}`}>
      <input className='bg-transparent rounded-xl w-full self-center h-full focus:outline-none text-text' type='text' placeholder='Search...' />
      <MagnifyingGlass className='bg-transparent self-center inline h-1/2 mr-15 w-fit fill-text' />
    </label>
  )
}
