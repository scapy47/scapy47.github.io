import { useMemo, useRef, useState } from "react"

interface props {
    text: string,
    className?: string
}

const Hacktxt = ({ text, className }: props) => {
    const [txt, setTxt] = useState<string>(text)

    //  get unicode char 
    const charVec = useMemo(() => {
        const Arr: Array<string> = []
        for (let i = 0x3041; i < 0x3096; i++) {
            Arr.push(String.fromCharCode(i))
        }
        return Arr
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
    const runCount = useRef(0)
    const intervalRef = useRef<ReturnType<typeof setInterval>>()
    const animation = () => {
        intervalRef.current = setInterval(() => {
            setTxt(text.split("").map((char, index) => {
                if (index < runCount.current) return char
                return charVec[Math.round(Math.random() * charVec.length)]
            }).join(""))

            runCount.current += 1 / 3
        }, 90);

        if (runCount.current >= text.length) {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                runCount.current = 0
            }
        }
    }

    return <span className={className}
        onTouchMove={animation}
        onTouchStart={animation}
        onTouchEnd={animation}
        onClick={animation}
        onMouseOver={animation}
        onMouseEnter={animation}
        onMouseLeave={animation}
    >{txt}</span>
}
export default Hacktxt