import { PropTypes } from 'prop-types';
import styles from './cardProjectSmall.module.css'
import useContexts from '../../hooks/useContext';

CardProjectSmall.propTypes = {
    technologies: PropTypes.node,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    to: PropTypes.string,
    btnDeploy: PropTypes.bool,
    toDeploy: PropTypes.string
}

export default function CardProjectSmall({ technologies, name, description, image, to, btnDeploy, toDeploy }) {
    const { toogleThemeElement } = useContexts()

    return (
        <div className={`${styles.cardProject} ${toogleThemeElement(styles.dark, styles.light)}`}>
            <div className={styles.dataProject}>
                <img src={image} alt={name} />
                <div className={styles.boxText}>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className={styles.box}>
                {technologies}
                {btnDeploy ?
                    <div className={styles.btnDeploy}>
                        <a href={`${toDeploy}`} target="_blank" className={styles.btnOpen}>Abrir Projeto</a>
                        <a href={`${to}`} target="_blank" className={styles.btn}>Saber mais</a>
                    </div>
                    :
                    <div className={styles.btnMore}>
                        <a href={`${to}`} target="_blank" className={styles.btn}>Saber mais</a>
                    </div>
                }
            </div>
        </div>
    )
}