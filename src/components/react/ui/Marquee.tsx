import { type ReactNode } from "react"

export default ({
  children,
  speed = 10
}: {
  children: ReactNode,
  speed?: number
}) => {
  return (
    <div className="w-lvw overflow-scroll gap-4 flex">{children}</div>
  )
}
