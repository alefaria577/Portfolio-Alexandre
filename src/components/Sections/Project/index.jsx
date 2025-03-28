import { useInView } from "react-intersection-observer";
import useContexts from "../../../hooks/useContext";
import CardProjectSmall from "../../CardProjectSmall";
import { TagCss, TagFirebase, TagGit, TagHtml, TagJavascript, TagMySql, TagNodejs, TagReact, TagTypescript, TagJQuery, TagBootstrap, TagKotlin, TagModelagem3D } from "../../Tags";
import styles from "./project.module.css";
import FormulaE from "../../../assets/projects/FormulaE.jpg"
import JFeletronic from "../../../assets/projects/JF_Eletronic.jpg"
import Espada from "../../../assets/projects/imagem_espada.jpg"

export default function Project() {
    const { setActiveSection, toogleThemeElement } = useContexts()

    const { ref: profectRef } = useInView({
        threshold: 0.5,
        onChange: (inView) => {
            if (inView) setActiveSection('project');
        },
    });

    return (
        <section id="project" ref={profectRef} className={`${styles.secProject} ${toogleThemeElement(styles.dark, styles.light)}`}>
            <h1>Projetos</h1>
            <div className={styles.containerProjects}>
                <CardProjectSmall
                    name='FormulaE'
                    description='O projeto da FormulaE é um projeto de corrida de carros para promover a empresa de tecnologia Tech Mahindra'
                    image={FormulaE}
                    to='https://github.com/alefaria577/Challenger_React_2024_2.git'
                    toDeploy='https://mahindra-web.vercel.app/'
                    btnDeploy={true}
                    technologies={
                        <div className={styles.boxTags}>
                            <TagReact />
                            <TagCss />
                            <TagGit />
                            <TagHtml />
                            <TagCss />
                            <TagJavascript />
                            <TagJQuery />
                            <TagKotlin />
                            
                            
                            
                            

                        </div>
                    }
                />
                <CardProjectSmall
                    name='JF Eletronic'
                    description='O JF Eletronic é um site Site para uma empresa de produtos eletrônicos'
                    image={JFeletronic}
                    to='https://github.com/alefaria577'
                    technologies={
                        <div className={styles.boxTags}>
                            <TagReact />
                            <TagCss />
                            <TagGit />
                            <TagHtml />
                            <TagJavascript />
                            <TagJQuery />
                            <TagBootstrap />
                            <TagKotlin />
                        </div>
                    }
                />

                <CardProjectSmall
                    name='Espada 3D'
                    description='Essa é uma espada 3D modelada usando técnicas de Modelagem 3D'
                    image={Espada}
                    to='https://github.com/alefaria577/Modelagem-3D'
                    technologies={
                        <div className={styles.boxTags}>
                            <TagModelagem3D />

                        </div>
                    }
                />

            </div>
            {/* <Link
                to='/'
                className={styles.btnAllProject}
            >Ver todos</Link> */}
        </section>
    )
}