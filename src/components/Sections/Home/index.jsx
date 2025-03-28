import useContexts from "../../../hooks/useContext"
import { useInView } from 'react-intersection-observer';
import styles from "./home.module.css";
import imagemAle from '../../../assets/Alexandre_home.jpeg'
import imagemAleCircle from '../../../assets/Ale_home_circle.png'
import { useEffect, useState } from "react";
import BtnCV from "../../BtnCV";
import TypeWriter from "../../TypeWriter";

export default function Home() {
    const { setActiveSection, toogleThemeElement } = useContexts()
    const [imageAle, setImageAle] = useState(window.innerWidth <= 1360 ? imagemAleCircle : imagemAle)

    useEffect(() => {
        const handleResize = () => {
            setImageAle(window.innerWidth <= 1360 ? imagemAleCircle : imagemAle)
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    const { ref: homeRef } = useInView({
        threshold: 0.5,
        onChange: (inView) => {
            if (inView) setActiveSection('home');
        },
    });

    return (
        <section id="home" className={`${styles.secHome} ${toogleThemeElement(styles.dark, styles.light)}`} ref={homeRef}>
            <div className={styles.containerText}>
                <div className={styles.boxText}>
                    <h2>Olá, me chamo <strong>Alexandre Faria!</strong></h2>
                    <TypeWriter />
                    <p>Transformo ideias em soluções digitais, dominando cada etapa do processo.</p>
                    <BtnCV />
                </div>
                <div className={styles.scroll}>
                    <span>SCROLL</span>
                    <div className={styles.lineScroll}></div>
                </div>
            </div>
            <div className={styles.containerLine}>
                <div className={styles.boxLine}>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.boxLine}>
                    <div className={styles.line}></div>
                </div>
            </div>
            <img src={imageAle} alt="Imagem do desenvolvedor do portifólio" />
        </section>
    )
}
