import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer>
            <nav className="px-2">
                <ul className="flex flex-wrap gap-2 text-[.8rem] text-[#71767b]">
                    <li><Link to="/">Terms of Use</Link></li>
                    <li><Link to="/">Privacy Policy</Link></li>
                    <li><Link to="/">Cookie Policy</Link></li>
                    <li><Link to="/">Accessibility</Link></li>
                    <li><Link to="/">Advertising Information</Link></li>
                    <li><Link to="/">More</Link></li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer