import dayjs from "dayjs"

const User = ({name, username, isPost}) => {
    return (
        <div className={`flex ${isPost ? "flex-row items-center gap-2" : "flex-col"}`}>
            <h3 className="text-[.9rem]">{name}</h3>
            <h4 className="text-[.9rem] text-[#717171]">@{username}</h4>
            {isPost && <><span className="text-[.9rem] text-[#717171]">.</span> <span className="text-[.9rem] text-[#717171]">{dayjs().format("D MMM")}</span></>}
        </div>
    )
}

export default User