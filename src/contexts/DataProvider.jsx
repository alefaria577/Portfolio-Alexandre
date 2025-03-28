import { createContext, useEffect, useState } from "react";
import { PropTypes } from 'prop-types';

export const DataContext = createContext({})

DataProvider.propTypes = {
    children: PropTypes.node
}

export default function DataProvider({children}){
    const [theme, setTheme] = useState('dark')
    const [activeSection, setActiveSection] = useState('home');
    const toogleThemeElement = (darkElement, lightElement) => theme === 'dark' ? darkElement : lightElement
    const toogleTheme = () => setTheme(theme === 'dark' ? 'light'  : 'dark')
    const [isMobileBig, setIsMobileBig] = useState(window.innerWidth <= 768)
    const [isMobileSmall, setIsMobileSmall] = useState(window.innerWidth <= 640)
    const [isChecked, setIsChecked] = useState(true)


    useEffect(() => {
        const handleResize = () => {
            setIsMobileBig(window.innerWidth <= 768)
            setIsMobileSmall(window.innerWidth <= 640)
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    const dados ={
        theme, toogleTheme,
        toogleThemeElement,
        activeSection, setActiveSection,
        isMobileBig, isMobileSmall,
        isChecked, setIsChecked
    }

    return(
        <DataContext.Provider value={dados}>
            {children}
        </DataContext.Provider>
    )
}