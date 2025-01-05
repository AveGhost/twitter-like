import Profile from "../../../profile/profile.component"
import Button from "../../../buttons/button.component"
import { Link } from "react-router-dom"

const FollowBox = ({user}) => {
    return (
        <div className="flex flex-col gap-3">
            {user.map((user, index) => {
                return (
                    <div key={index} className="flex justify-between items-center">
                        <Link to={`/profile/${user.username}`}>
                            <Profile avatar={user.avatar} name={user.name} username={user.username} />
                        </Link>
                        <Button text="Follow" />
                    </div>
                )
            })}
        </div>
    )
}

export default FollowBox