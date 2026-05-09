import { NavLink } from 'react-router-dom'

type NavButtonProps = {
  name: string;
  to: string;
  className?: string;
};

export default function NavButton({name, to, className}: NavButtonProps) {
  return (
    <NavLink className={`mb-5 h-50 w-fit flex items-center px-5 rounded-xl not-dark:bg-element-light dark:bg-element-dark not-dark:border-element-border-light dark:border-element-border-dark border-3 hover:not-dark:border-element-border-active-light hover:dark:border-element-border-active-dark active:not-dark:bg-element-active-light active:dark:bg-element-active-dark not-dark:text-text-light dark:text-text-dark ${className}`} to={to}>{name}</NavLink>
  )
}
