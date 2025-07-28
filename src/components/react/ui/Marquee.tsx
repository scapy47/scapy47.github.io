import type { ReactNode, CSSProperties } from "react"
import { Children, cloneElement, isValidElement } from "react";

type Props = {
  children: ReactNode
}
const style: CSSProperties = {
  animation: "scrollSide",
  animationDuration: "10s",
  animationTimingFunction: "linear",
  animationIterationCount: "infinite"
}
export default ({ children }: Props) => {

  return (
    <div className="relative box-content overflow-x-scroll overflow-y-visible border-2 border-white">
      <style>
        {`
          @keyframes scrollSide {
            100% {
              left: calc(-100% + 1rem);
            }
          }
        `}
      </style>
      {
        Children.map(children, child => {
          if (isValidElement(child)) {
            return cloneElement(child, {
              // @ts-ignore
              style: {
                ...style,
                // @ts-ignore
                ...child.props.style
              }
            })
          }
        })
      }
    </div>
  )
}
