import { NavLink } from 'react-router-dom'

type NavButtonProps = {
  name: string;
  to: string;
  className?: string;
};

export default function NavButton({name, to, className}: NavButtonProps) {
  return (
    <NavLink className={`mb-5 h-50 w-fit flex items-center px-5 rounded-xl bg-element border-element-border border-3 hover:border-element-border-active active:bg-element-active text-text ${className}`} to={to}>{name}</NavLink>
  )
}
