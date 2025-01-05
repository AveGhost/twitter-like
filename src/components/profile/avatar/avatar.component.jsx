const Avatar = ({src, user}) => {
    return (
        <img className="rounded-full" src={src} alt={`${user}'s avatar`} />
    )
}

export default Avatar