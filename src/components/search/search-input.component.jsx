import { Icon } from "@iconify/react/dist/iconify.js"

const SearchInput = () => {
    return (
        <form className="flex items-center gap-3 bg-[#14171a] p-3 rounded-full">
            <Icon icon="weui:search-outlined" width="24" height="24"  style={{color: '#71767b'}} />
            <input className="w-full bg-transparent border-none outline-none text-[#71767b]" type="text" placeholder="Search" />
        </form>
    )
}

export default SearchInput