import TooltipContent from "./tooltip-content.component"
import { Icon } from "@iconify/react/dist/iconify.js"
import { useState } from "react"

const TooltipButton = ({content}) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleTooltip = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="relative">
            <button onClick={toggleTooltip}><Icon icon="lsicon:more-filled" width="16" height="16"  style={{color: '#71767b'}} /></button>
            {isOpen &&
                <div className="absolute z-10 top-4 min-w-[max-content] right-0 shadow-[0_0_10px_0_rgba(255,255,255,0.3)] bg-zinc-950 rounded-lg">
                    {content.map((content, index) => {
                        return (
                            <TooltipContent key={index} content={content.content} icon={content.icon} />
                        )
                    })}
                </div>
            }
        </div>
    )
}

export default TooltipButton