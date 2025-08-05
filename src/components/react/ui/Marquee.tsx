import type { ReactNode, ReactElement, CSSProperties } from "react"
import { Children, cloneElement, isValidElement, useRef, useEffect } from "react";
import style from "@/styles/snippet.module.css"

type Props = {
  children: ReactNode,
  duration?: number
}

/**
 * @param duration - controls the speed and spacing elements in marquee.
 */
export default ({ children, duration = 10 }: Props) => {

  const rootRef = useRef<HTMLDivElement>(null)
  const relativeAnimationDuration = (duration / Children.count(children))
  let uniqueDelay = 0

  useEffect(() => {
    if (rootRef.current) {
      rootRef.current.style.setProperty("--scrollSideDuration", `${duration}s`)
    }
  }, [duration])


  return (
    <div ref={rootRef} className="relative box-content overflow-x-hidden overflow-y-visible border-2 border-white flex">
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
