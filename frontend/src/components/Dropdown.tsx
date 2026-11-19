import type { ReactNode } from "react"

type Props = {
  title: string
  className?: string
  children?: ReactNode
}

export default function Dropdown({title, className, children}: Props) {
  return (
    <details className={`relative cursor-pointer ${className}`}>
      <summary className="h-full px-1 content-center border-element-border list-none [&::-webkit-details-marker]:hidden in-open:rounded-b-none in-open:border-b-2 rounded-xl border-3 bg-element text-text">{title}</summary>
      <ul className="bg-element w-[calc(100%)] rounded-box z-1 px-2 absolute border-element-border border-3 border-t-0 rounded-b-xl text-text">
        {children}
      </ul>
    </details>
  )
}
