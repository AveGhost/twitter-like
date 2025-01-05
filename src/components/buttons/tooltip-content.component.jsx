import { Icon } from "@iconify/react/dist/iconify.js"

const TooltipContent = ({content, icon}) => {
    return (
        <div className="flex gap-3 items-center w-full p-4">
            <Icon icon={icon} width="20" height="20" />
            <p className="text-[.9rem] font-bold">{content}</p>
        </div>
    )
}

export default TooltipContent