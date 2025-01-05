import { Link } from "react-router-dom"

const InfoBox = ({heading, content, link}) => {
    return (
        <div className="border rounded-lg p-4 border-[#2f3336]">
            <h2 className="text-xl font-medium">{heading}</h2>
            <div className="py-4">
                {content}
            </div>
            <Link to={link} className="text-[#1da1f2] text-[.9rem]">Show more</Link>
        </div>
    )
}

export default InfoBox