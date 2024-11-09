import React from 'react';
import styles from './bio.module.scss';
import Skills from '../../components/Skills/index';

function Bio() {
    return (
        <div className={styles.maxWidth}>
        <div className={styles.globalContainer}>
            <div className={`${styles.generalContainer} ${styles.categoriesContainer}`}>
                <div className={styles.titleWrapper}>
                    <h2>GÉNÉRAL</h2>
                </div>
                <div className={styles.titleContentWrapper}>
                    <div className={styles.imageContainer}>
                        <img src="images/portrait.jpg" alt="Mon portrait" />
                    </div>
                    <div className={styles.textContainer}>
                        <p>Nom : LOCKS</p>
                        <p>Prénom : Mike</p>
                        <p>Né le 10/11/1995 à Metz</p>
                        <p>Permis B</p>
                    </div>
                </div>
            </div>
            <div className={styles.separatorContainer}>
                <div className={styles.separator} />
            </div>
            <div className={`${styles.proContainer} ${styles.categoriesContainer}`}>
                <div className={styles.titleWrapper}>
                    <h2>EXPÉRIENCE PROFESSIONNELLE</h2>
                </div>
                    <h3>Novembre 2024 - Présent | Free-lance <br />
                        Intégrateur Web | Développeur
                    </h3>
                    <p>[ ] Développement et intégration de sites internet pour professionnels et particuliers. Réalisation de sites vitrines.</p>

                    <h3>Mars 2021 - Novembre 2023 | PLUS (Poids Lourd Utilitaire Services) <br />
                    Technicien bureau d'études
                    </h3>
                    <p>[ ] Conception 3D de faux-châssis pour le montage des équipement hydrauliques & plateaux sur poids lourd.</p>
                    <p>[ ] Création de plans et de dossiers / processus de fabrication / montages des faux châssis et plateaux.</p>

                    <h3>Septembre 2018 - Mars 2021 | Manoir Industries Group <br />
                        Technicien bureau d'études | Conception 3D | Mise en plan | Suivi / Optimisation de production
                    </h3>
                    <p>[ ] Conception 3D de pièces forgées (opérations d'estampage & d'extrusion).</p>
                    <p>[ ] Création de plans et de dossiers / processus de fabrication.</p>
                    <p>[ ] Suvi des essais de productions / Suivi et optimisation de production</p>
            </div>
            <div className={styles.separatorContainer}>
                <div className={styles.separator} />
            </div>
            <div className={`${styles.formationsContainer} ${styles.categoriesContainer}`}>
                <div className={styles.titleWrapper}>
                    <h2>FORMATONS</h2>
                </div>
                <h3>2015 - 2016 | Licence Professionnelle MCPA <br />
                    IUT Génie Mécanique, Metz Saulcy
                </h3>
                <h3>2013 - 2015 | BTS I.P.M <br />
                    Lycée Louis Vincent, Metz   
                </h3>
                <h3>2013 | Baccalauréat STI2D<br />
                    Lycée Louis Vincent, Metz  
                </h3>
            </div>
            <div className={styles.separatorContainer}>
                <div className={styles.separator} />
            </div>
            <div className={`${styles.competencesContainer} ${styles.categoriesContainer}`}>
                <div className={styles.titleWrapper}>
                    <h2>COMPÉTENCES</h2>
                </div>
                    <h3>Techniques</h3>
                    <div className={styles.skillsContainer}>
                        <Skills />
                    </div>
                    <div className={styles.sideSkillsContainer}>
                        <div className={styles.languagesContainer}>
                            <h3>Langues</h3>
                            <p>Français | Natif</p>
                            <p>Anglais</p>
                        </div>
                        <div className={styles.othersContainer}>
                            <h3>Autres</h3>
                            <p>Pack Office</p>
                            <p>SolidWorks</p>
                            <p>CATIA V5</p>
                            <p>Autocad</p>
                        </div>
                    </div>
            </div>
            {/* <div className={styles.separatorContainer}>
                <div className={styles.separator} />
            </div>
            <div className={`${styles.interetsContainer} ${styles.categoriesContainer}`}>
                <div className={styles.titleWrapper}>
                    <h2>CENTRES D'INTÉRÊTS</h2>
                </div>
            </div> */}
        </div>
        </div>
    )
}

export default Bio;
