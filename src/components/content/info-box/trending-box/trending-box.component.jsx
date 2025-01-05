import TooltipButton from "../../../buttons/tooltip-button.component"
import { Link } from "react-router-dom"

const TrendingBox = ({trending}) => {
    const tooltipOptions = [
        {
           'content': 'Associated content is not related to the topic',
           'icon': 'lets-icons:sad-light'
        },
        {
           'content': 'This trend is spam',
           'icon': 'lets-icons:sad-light'
        },
        {
           'content': 'This content is harmful or constitutes abuse',
           'icon': 'lets-icons:sad-light'
        },
        {
           'content': "I'm not interested in this",
           'icon': 'lets-icons:sad-light'
        },
        {
           'content': 'This trend is a duplicate',
           'icon': 'lets-icons:sad-light'
        },
        {
           'content': 'This trend is harmful or constitutes spam',
           'icon': 'lets-icons:sad-light'
        }
    ]
    return (
        <div className="flex flex-col gap-3">
            {trending.map((trend, index) => {
                return (
                    <div key={index} className="flex justify-between items-center">
                        <div className="flex flex-col gap-1">
                            <h3 className="text-[.9rem] font-bold"><Link to={trend.name}>{trend.name}</Link></h3>
                            {trend.postsCount && <span className="text-[.9rem] text-[#717171]">Posts: {trend.postsCount}</span>}
                        </div>
                        <TooltipButton content={tooltipOptions} />
                    </div>
                )
            })}
        </div>
    )
}

export default TrendingBox