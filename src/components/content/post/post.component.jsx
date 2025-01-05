import Avatar from "../../profile/avatar/avatar.component"
import User from "../../profile/user/user.component"

const Post = ({avatar, name, username, context, image}) => {
    return (
        <article className="flex gap-3 p-4 border-b border-[#2f3336]">
            <div className="w-full max-w-[40px]">
                <Avatar src={avatar} user={name} />
            </div>
            <div>
                <User name={name} username={username} isPost />
                <div className="text-[.9rem]">{context}</div>
                {image &&
                    <div className="w-full h-full mx-auto rounded-lg border-[#2f3336] overflow-hidden relative">
                        <img className="mt-3 object-contain rounded-lg" src={image} />
                    </div>
                }
            </div>
        </article>
    )
}

export default Post