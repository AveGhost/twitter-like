import { Icon } from "@iconify/react/dist/iconify.js"
import { Link } from "react-router-dom"
import NavLink from "./navigation/nav-link.component"
import links from "../../api/nav-links"
import Profile from "../profile/profile.component"

const Header = () => {
    return (
        <header className="flex flex-col h-screen sticky top-0 w-full max-w-[275px] py-4">
            <div>
                <Link to="/"><span className="px-2 block"><Icon icon="ri:twitter-x-fill" width="40" height="40"  style={{color: '#fff'}} /></span></Link>
                <nav className="mt-4 flex flex-col gap-6">
                    {links.map(link => <NavLink key={link.name} href={link.href} name={link.name} icon={link.icon} />)}
                </nav>
            </div>
            <div className="flex gap-4 items-center mt-auto">
                <Profile avatar="/twitter-avatar.png" name="AveGhost" username="AveGhost" />
                <Icon icon="material-symbols-light:logout" width="24" height="24"  style={{color: '#fff'}} />
            </div>
        </header>
    )
}

export default Header