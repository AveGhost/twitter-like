import Avatar from "./avatar/avatar.component"
import User from "./user/user.component"

const Profile = ({avatar, name, username}) => {
    return (
        <div className="flex gap-3">
            <Avatar src={avatar} user={name} />
            <User name={name} username={username} />
        </div>
    )
}

export default Profile