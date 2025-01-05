import { Icon } from "@iconify/react/dist/iconify.js"
import Avatar from "../../profile/avatar/avatar.component"
import Button from "../../buttons/button.component"

const AddPost = () => {
    return (
        <form className="border-b border-[#2f3336]">
            <div className="flex gap-3 p-4">
                <div className="w-full max-w-[40px]">
                    <Avatar src="/twitter-avatar.png" user="AveGhost" />
                </div>
                <div className="w-full">
                    <input className="w-full bg-transparent border-none outline-none text-[#71767b]" type="text" placeholder="What's happening?" />
                    <div className="flex justify-between w-full pt-4">
                        <div className="flex self-end items-center gap-3">
                            <Icon icon="material-symbols-light:perm-media-outline" width="24" height="24"  style={{color: '#fff'}} />
                            <Icon icon="material-symbols-light:gif-box-outline-rounded" width="24" height="24"  style={{color: '#fff'}} />
                        </div>
                        <Button text="Share post" />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default AddPost