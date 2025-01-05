import { Outlet } from "react-router-dom"
import Header from "./components/header/header.component"
const Layout = () => {
    return (
        <div className="container mx-auto">
            <div className="flex">
                <Header />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout