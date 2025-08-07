import type { ReactNode, ReactElement, CSSProperties } from "react"
import { Children, cloneElement, isValidElement, useRef, useEffect } from "react";
import style from "./Marquee.module.css"

type Props = {
  children: ReactNode,
  speed?: number
}

type Clone = ReactElement<{
  className?: string, style: CSSProperties
}>

/**
 * @param {number} speed - controls the speed of marquee.
 */
export default ({ children, speed = 10 }: Props) => {

  const rootRef = useRef<HTMLDivElement>(null)
  const relativeAnimationDuration = (speed / Children.count(children))

  useEffect(() => {
    rootRef.current?.style.setProperty("--scrollSideDuration", `${speed}s`)
  }, [speed])


  return (
    <div ref={rootRef} className="relative overflow-x-hidden overflow-y-visible flex flex-nowrap">
      {
        Children.map(children, (child, index) => {
          const count = index + 1
          if (isValidElement(child) && typeof child.props === "object" && child.props !== null) {
            return cloneElement(child as Clone, {
              ...child.props,
              className: `${(child.props as any).className || ''} ${style.scrollSide}`.trim(),
              style: {
                animationDelay: `${relativeAnimationDuration * (Children.count(children) - count) * -1}s`
              }
            })
          }
        })
      }
    </div>
  )
}
