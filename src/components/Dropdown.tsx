import type { ReactNode } from "react"

type Props = {
  className?: string
  children?: ReactNode
}

export default function Dropdown({className, children}: Props) {
  return (
    <details className={`dropdown border-3 rounded-xl not-dark:border-element-border-light dark:border-element-border-dark not-dark:bg-element-light dark:bg-element-dark not-dark:text-text-light dark:text-text-dark ${className}`}>
      <summary className="btn p-1 border-b-2 not-dark:border-element-border-light dark:border-element-border-dark list-none [&::-webkit-details-marker]:hidden">open or close</summary>
      <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
        {children}
      </ul>
    </details>
  )
}
