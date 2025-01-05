const Button = ({text, onClick}) => {
    return (
        <button onClick={onClick} className="bg-white text-black font-bold rounded-full text-sm py-2 px-4 hover:bg-white/75 duration-300 transition">{text}</button>
    )
}

export default Button