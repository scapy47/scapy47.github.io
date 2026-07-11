import { useEffect, useMemo, useRef } from "preact/hooks";
import { useSignal } from "@preact/signals"
import type { JSX } from "preact/jsx-runtime";

type props = {
  text: string;
  className?: string;
  id?: string;
  lg?: "en" | "jp";
  animateOnLoad?: boolean;
  Tag?: JSX.ElementType
}

const Hacktxt = ({ text, className, lg = "en", id, animateOnLoad = false, Tag = "span" }: props) => {
  const txt = useSignal(text);

  //  get unicode char
  const charVec = useMemo(() => {

    let start: number;
    let end: number;

    switch (lg) {
      case "en":
        start = 0x0061;
        end = 0x007A;
        break;
      case "jp":
        start = 0x3042;
        end = 0x3093;
        break;
      default:
        start = 0x0041;
        end = 0x005A;
        break;
    }

    const Arr: Array<string> = [];
    for (let i = start; i < end; i++) {
      Arr.push(String.fromCharCode(i));
    }
    return Arr;
  }, []);

  // console.log(charVec)

  // const getInnerText = (node: ReactNode): string => {
  //     return Children.toArray(node).map((child) => {
  //         if (isValidElement(child)) {
  //             return child.props.value
  //         } else if (typeof child === "string") {
  //             return child
  //         } else if (typeof child === "number") {
  //             return child.toString()
  //         }
  //         return ""
  //     }).join("").trim().split(">")[1].split("<")[0]
  // }
  // console.log(getInnerText(children))
  const runCount = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const animation = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        txt.value = text
          .split("")
          .map((char, index) => {
            if (index < runCount.current) return char;
            return charVec[Math.round(Math.random() * charVec.length)];
          })
          .join("");

        runCount.current += 1 / 3;

        if (runCount.current >= text.length) {
          clearInterval(intervalRef.current!);
          intervalRef.current = null;
          runCount.current = 0;
        }

      }, 30);
    }

    // if (runCount.current >= text.length && intervalRef.current) {
    //   clearInterval(intervalRef.current);
    //   intervalRef.current = null;
    //   runCount.current = 0;
    // }
  };

  useEffect(() => {
    if (animateOnLoad) animation()
  }, [])

  return (
    <Tag
      className={className}
      id={id}
      onTouchStart={animation}
      onTouchEnd={animation}
      onClick={animation}
      onMouseOver={animation}
      onMouseEnter={animation}
      onMouseLeave={animation}
    >
      {txt}
    </Tag>
  );
};
export default Hacktxt;
