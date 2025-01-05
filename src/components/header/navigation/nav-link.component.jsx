import { Link } from "react-router-dom"
import { Icon } from "@iconify/react/dist/iconify.js"

const NavLink = ({href, name, icon}) => {
    return (
        <Link className="group" to={href}>
            <div className="flex w-fit gap-4 text-xl items-center group-hover:bg-[#2f3336]/45 transition-all duration-300 py-3 px-4 rounded-full">
                <Icon icon={icon} />{name}
            </div>
        </Link>
    )
}

export default NavLink