import { Outlet } from "react-router-dom"
import Header from './../components/Header/index';
import useContexts from "../hooks/useContext";
import HeaderMobile from "../components/HeaderMobile";

export default function RootLayout() {
    const { theme, isMobileBig } = useContexts()

    return (
        <div className="containerBody" id={theme}>
            {isMobileBig ? <HeaderMobile /> : <Header />}
            <main>
                <Outlet/>
            </main>
        </div>
    )
}