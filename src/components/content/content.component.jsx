import Post from "./post/post.component"
import InfoBox from "./info-box/info-box.component"
import FollowBox from "./info-box/follow-box/follow-box.component"
import fakeUsers from "../../api/fake-users"
import fakeTrends from "../../api/fake-trends"
import fakePosts from "../../api/fake-posts"
import TrendingBox from "./info-box/trending-box/trending-box.component"
import SearchInput from "../search/search-input.component"
import AddPost from "./add-post/add-post.component"
import Footer from "../footer/footer.component"
import { useState } from "react"

const HomeContent = () => {
    const [forYou, setForYou] = useState(true)
    return (
        <div className="flex gap-6">
            <div className="border-l border-r border-[#2f3336] relative">
                <div className="flex items-center text-center z-10 bg-[#14171a]/90 sticky top-0 w-full justify-between border-b border-[#2f3336]">
                    <div className="w-full p-3 cursor-pointer hover:bg-[#2f3336]/45 transition-all duration-150" onClick={() => setForYou(true)}>
                        <div className={`relative w-fit mx-auto ${forYou ? 'font-bold' : ''}`}>
                            For you
                            {forYou && <span className="bg-[#1d9bf0] w-full left-0 h-1 absolute -bottom-3 rounded-full"></span>}
                        </div>
                    </div>
                    <div className="w-full p-3 cursor-pointer hover:bg-[#2f3336]/45 transition-all duration-150" onClick={() => setForYou(false)}>
                        <div className={`relative w-fit mx-auto ${!forYou ? 'font-bold' : ''}`}>
                            Followed
                            {!forYou && <span className="bg-[#1d9bf0] w-full left-0 h-1 absolute -bottom-3 rounded-full"></span>}
                        </div>
                    </div>
                </div>
                <AddPost />
                {fakePosts.map((post, index) => {
                    return (
                        <Post key={index} avatar={post.avatar} image={post.image} name={post.name} username={post.username} context={post.context} />
                    )
                })}
            </div>
            <div className="flex flex-col gap-4 h-full sticky w-full max-w-[350px] py-4 top-0">
                <SearchInput />
                <InfoBox heading="Worth watching" content={<FollowBox user={fakeUsers} />} link="/" />
                <InfoBox heading="Now trending" content={<TrendingBox trending={fakeTrends} />} link="/" />
                <Footer />
            </div>
        </div>
    )
}

export default HomeContent