import { FaArrowAltCircleDown } from 'react-icons/fa';
import curriculoPDF from '../../assets/AlexandreFaria-Curriculo.pdf';
import useContexts from '../../hooks/useContext';
import styles from "./btnCV.module.css";

export default function BtnCV() {
    const { toogleThemeElement } = useContexts()

    return (
        <a href={curriculoPDF} download='AlexandreFaria-Curriculo.pdf' className={toogleThemeElement(styles.linkCVDark, styles.linkCVLight)}>
            <span>Baixar o Currículo</span>
            <FaArrowAltCircleDown />
        </a>
    )
}