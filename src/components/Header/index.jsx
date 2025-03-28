import { useEffect, useState } from 'react'
import useContexts from '../../hooks/useContext'
import styles from './header.module.css'
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'
import iconHomeDark from '../../assets/icons/homeDark.svg'
import iconHomeLight from '../../assets/icons/homeLight.svg'
import iconMenuDark from '../../assets/icons/menuDark.svg'
import iconMenuLight from '../../assets/icons/menuLight.svg'
import iconUserDark from '../../assets/icons/userDark.svg'
import iconUserLight from '../../assets/icons/userLight.svg'
import iconProjectDark from '../../assets/icons/projectDark.svg'
import iconProjectLight from '../../assets/icons/projectsLight.svg'
import iconContactDark from '../../assets/icons/contactDark.svg'
import iconContactLight from '../../assets/icons/contactLight.svg'
import iconThemeDark from '../../assets/icons/iconThemeDark.svg'
import iconThemeLight from '../../assets/icons/iconThemeLight.svg'
import { PropTypes } from 'prop-types';
import SwitchTheme from '../SwitchTheme'

const ItemMenu = ({ children }) => {
    return (
        <li className="ps-menuitem-root css-1t8x7v1">
            <div className="ps-menu-button" data-testid="ps-menu-button-test-id" tabIndex="0">
                <span className="ps-menu-label css-12w9als">
                    {children}
                </span>
            </div>
        </li>
    )
}

ItemMenu.propTypes = {
    children: PropTypes.node
}

export default function Header() {
    const { toogleThemeElement, isChecked, setIsChecked, activeSection, toogleTheme } = useContexts()
    const [collapsed, setCollapsed] = useState(true)
    const [animate, setAnimate] = useState(false)
    const [valueAnimate, setValueAnimate] = useState(0)

    useEffect(() => {
        setAnimate(true);

        const timer = setTimeout(() => {
            setAnimate(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [valueAnimate]);

    const handleChange = () => {
        setValueAnimate(valueAnimate + 1);
    };

    return (
        <header className={`${toogleThemeElement(styles.dark, styles.light)} ${styles.header}`}>
            <Sidebar collapsed={collapsed} className={styles.nav}>
                <Menu>
                    <MenuItem onClick={() => setCollapsed(!collapsed)}>
                        <div className={styles.itemMenu}>
                            <img src={toogleThemeElement(iconMenuDark, iconMenuLight)} alt="Icone referênciando o menu" />
                            <p>Menu</p>
                        </div>
                    </MenuItem>
                    <ul className={styles.navBar}>
                        <ItemMenu >
                            <a href="#home" className={activeSection === 'home' ? styles.activeBar : styles.disableBar}>
                                <img src={toogleThemeElement(iconHomeDark, iconHomeLight)} alt="Icone referênciando o home" />
                                <p>Home</p>
                            </a>
                        </ItemMenu>

                        <ItemMenu >
                            <a href="#aboutMe" className={activeSection === 'aboutMe' ? styles.activeBar : styles.disableBar}>
                                <img src={toogleThemeElement(iconUserDark, iconUserLight)} alt="Icone referênciando o sobre mim" />
                                <p>Sobre mim</p>
                            </a>
                        </ItemMenu>

                        <ItemMenu >
                            <a href="#project" className={activeSection === 'project' ? styles.activeBar : styles.disableBar}>
                                <img src={toogleThemeElement(iconProjectDark, iconProjectLight)} alt="Icone referênciando o projetos" />
                                <p>Projetos</p>
                            </a>
                        </ItemMenu>

                        <ItemMenu >
                            <a href="#contact" className={activeSection === 'contact' ? styles.activeBar : styles.disableBar}>
                                <img src={toogleThemeElement(iconContactDark, iconContactLight)} alt="Icone referênciando o contato" />
                                <p>Contato</p>
                            </a>
                        </ItemMenu>
                    </ul>
                    <MenuItem >
                        <div className={styles.itemTheme} style={{ display: 'flex', alignItems: 'center' }}>
                            <img
                                src={`${toogleThemeElement(iconThemeDark, iconThemeLight)} `}
                                onClick={() => {
                                    if (collapsed == true) {
                                        setCollapsed(!collapsed)
                                    }
                                    toogleTheme()
                                    handleChange()
                                    setIsChecked(!isChecked)
                                }}
                                className={`${animate ? styles.iconTheme : ''}`}
                                alt="Icone referênciando o trocar de tema" />
                            <div onClick={handleChange}>
                                <SwitchTheme />
                            </div>
                        </div>
                    </MenuItem>

                </Menu>
            </Sidebar>
        </header>
    )
}
