import type { ReactNode, ReactElement, CSSProperties } from "react"
import { Children, cloneElement, isValidElement, useRef, useEffect } from "react";
import style from "@/styles/snippet.module.css"

type Props = {
  children: ReactNode,
  speed?: number
}

/**
 * @param {number} speed - controls the speed of marquee.
 */
export default ({ children, speed = 10 }: Props) => {

  const rootRef = useRef<HTMLDivElement>(null)
  const relativeAnimationDuration = (speed / Children.count(children))
  let uniqueDelay = 0

  useEffect(() => {
    if (rootRef.current) {
      rootRef.current.style.setProperty("--scrollSideDuration", `${speed}s`)
    }
  }, [speed])


  return (
    <div ref={rootRef} className="relative overflow-x-hidden overflow-y-visible flex">
      {
        Children.map(children, (child, index) => {

          uniqueDelay = Children.count(children) - (index + 1)

          if (isValidElement(child) && typeof child.props === "object" && child.props !== null) {
            return cloneElement(child as ReactElement<{ className?: string, style: CSSProperties }>, {
              ...child.props,
              className: `${(child.props as any).className || ''} ${style.scrollSide}`.trim(),
              style: {
                animationDelay: `${relativeAnimationDuration * uniqueDelay * -1}s`
              }
            })
          }
        })
      }
    </div>
  )
}
