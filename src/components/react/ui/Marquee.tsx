import { useEffect, Children, type ReactNode, useRef, useState } from "react"

type Props = {
  children: ReactNode,
  direction?: "left" | "right",
  speed?: string | number,
  gap?: string | number
}

export default ({
  children,
  direction = "left",
  speed = "1s",
  gap = "1rem"
}: Props) => {

  const items = Children.toArray(children);
  const rootRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {

    if (rootRef.current && rootRef.current.parentElement) {
      setWidth(parseInt(window.getComputedStyle(rootRef.current.parentElement).width.replace("px", "")))
    }

    return () => {
      return
    }
  })

  const stylesheet = `
  @keyframes marqueeAnimA {
      from {
          transform: translateX(0);
      }
      to {
          transform: translateX(-100%);
      }
  }`

  return (
    <div ref={rootRef} className="overflow-scroll flex items-center bg-amber-600 w-full">
      <style>{stylesheet}</style>
      <div className="w-full inline-flex" style={{ gap: `${gap}` }}>

        <div className="inline-flex items-center" style={{ gap: `${gap}`, animation: `marqueeAnim ${speed} infinite` }}>
          {items.map((c, i) => (
            <div key={`a-${i}`} className="inline-flex items-center" >
              {c}
            </div>
          ))}
        </div>

        <div aria-hidden className="inline-flex items-center" style={{ gap: `${gap}`, animation: `marqueeAnim ${speed} infinite` }}>
          {items.map((c, i) => (
            <div key={`b-${i}`} className="inline-flex items-center" >
              {c}
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
