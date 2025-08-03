import type { ReactNode, ReactElement } from "react"
import { Children, cloneElement, isValidElement, useRef} from "react";
import style from "@/styles/snippet.module.css"

type Props = {
  children: ReactNode
}
export default ({ children }: Props) => {

  const rootRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={rootRef} className="relative box-content overflow-x-scroll overflow-y-visible border-2 border-white">
      {
        Children.map(children, child => {
          if (isValidElement(child) && typeof child.props === "object" && child.props !== null) {
            return cloneElement(child as ReactElement<{ className?: string }>, {
              ...child.props,
              className: `${(child.props as any).className || ''} ${style.scrollSide}`.trim()
            })
          }
        })
      }
    </div>
  )
}
