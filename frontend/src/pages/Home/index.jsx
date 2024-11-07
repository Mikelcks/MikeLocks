/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom'
import Lottie from 'lottie-react';
import performance from '../../assets/performance.json'
import newWebsite from '../../assets/website.json'
import seo from '../../assets/seo.json'
import styles from './home.module.scss';

function Home() {
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.videoBackground}>
        <video autoPlay loop muted className={styles.video} playsInline>
        <source src="videos/home.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlayText}>
            <div className={styles.overlayTextTop}>
                <h1>DÉVELOPPEMENT DE SITES WEB</h1>
                <div className={styles.subtitle}>TRANSFORMEZ VOS IDÉES EN RÉALITÉ DIGITALE</div>
            </div>
            <div className={styles.overlayTextBot}>
                <span className={styles.description}>Conception française, pour un site qui vous ressemble.</span>
                <Link to={`/contact`} className={styles.link}>
                    Demander un devis
                </Link>
            </div>
        </div>
    </div>

        <section className={styles.content}>
            <div className={styles.imageTextRow}>
                <div className={styles.imageWrapper}>
                    <div className={styles.image}>
                        <Lottie animationData={newWebsite} loop={true} />
                    </div>
                </div>
                <div className={styles.textWrapper}>
                    <div className={styles.text}>
                        <h2>CRÉATION DE SITES WEB SUR MESURE</h2>
                        <p>
                            Vous souhaitez renforcer votre présence en ligne et attirer de nouveaux clients ? Un site web bien conçu est essentiel pour faire briller votre entreprise. Imaginez vos futurs clients découvrant vos services à travers un site élégant et fonctionnel, au lieu de chercher sans succès sur Google.
                            Ne laissez pas vos concurrents vous devancer ! Offrez à votre entreprise un site web sur mesure qui reflète votre identité et engage vos visiteurs. Contactez-moi pour donner vie à votre projet et transformer votre présence en ligne en un véritable atout.
                        </p>
                        <div className={styles.separator}></div>
                        {/* <Link to={`/services`} className={styles.link}>
                            En savoir plus sur nos services
                        </Link> */}
                        <Link to={`/contact`} className={styles.link}>
                            Prenez contact avec moi
                        </Link>
                    </div>
                </div>
            </div>

            <div className={`${styles.imageTextRow} ${styles.reverse}`}>
                <div className={styles.imageWrapper}>
                    <div className={styles.image}>
                        <Lottie animationData={performance} loop={true} />
                    </div>
                </div>
                <div className={styles.textWrapper}>
                    <div className={styles.text}>
                        <h2>PERFORMANCE & QUALITÉ</h2>
                        <div className={styles.separator}></div>
                        <p>
                            Je m'engage à optimiser chaque site pour garantir des performances maximales et une qualité irréprochable. Tous mes sites respectent les critères d'ergonomie et de design, assurant une expérience utilisateur fluide sur tous les appareils.
                            Lors de la création de votre site web, vous serez régulièrement informé de l'avancement de votre projet et aurez la possibilité de suivre les améliorations en temps réel, avant la mise en ligne. Votre satisfaction est ma priorité !
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.imageTextRow}>
                <div className={styles.imageWrapper}>
                    <div className={styles.image}>
                        <Lottie animationData={seo} loop={true} />
                    </div>
                </div>
                <div className={styles.textWrapper}>
                    <div className={styles.text}>
                        <h2>RÉFÉRENCEMENT & SEO</h2>
                        <p>
                            Dans l'immense univers du web, il est crucial de se démarquer pour figurer parmi les premiers résultats sur Google. En tant que créateur de sites internet en Moselle, j’accorde une attention particulière au référencement, en optimisant le code et les performances de votre site.
                            Si nécessaire, je peux également vous proposer une campagne Google Ads pour maximiser votre visibilité. Grâce à un SEO de qualité, votre site sera mieux référencé, attirant de nouveaux clients et augmentant le nombre de visiteurs.
                        </p>
                        <div className={styles.separator}></div>
                        {/* <Link to={`/services`} className={styles.link}>
                            En savoir plus sur nos services
                        </Link> */}
                        <Link to={`/contact`} className={styles.link}>
                            Prenez contact avec moi
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        <section className={styles.stepsContainer}>
            <h2 className={styles.title}>Les étapes de création de votre site</h2>
                <div className={styles.stepsGrid}>
                    <div className={styles.stepsBGLeft}></div>
                    <div className={styles.stepsBGRight}></div>
                    <div className={styles.step}>
                        <h3>1. Devis</h3>
                        <p>
                            Après un premier entretien, qu'il soit en face à face ou par téléphone, pour clarifier vos besoins, un devis détaillé sera envoyé. Celui-ci inclura une liste complète des éléments à développer. Pour les projets plus élaborés, un cahier des charges sera également élaboré.
                        </p>
                    </div>
                    <div className={styles.step}>
                        <h3>2. Conception</h3>
                        <p>
                            Dès la réception de l’acompte, je commencerai à travailler sur votre projet en respectant les directives et les éventuelles chartes graphiques. Vous aurez déjà accès au site en cours de développement pour suivre l'avancement en temps réel !
                        </p>
                    </div>
                    <div className={styles.step}>
                        <h3>3. Livraison</h3>
                        <p>
                            Une fois le site ou l’application finalisée, testée et opérationnelle, le produit vous sera remis « clés en mains » avec tous les identifiants et mots de passe nécessaires.
                        </p>
                    </div>
                    <div className={styles.step}>
                        <h3>4. Maintenance</h3>
                        <p>
                            Pour les sites nécessitant une maintenance ou des mises à jour fréquentes, un forfait mensuel pourra être proposé, permettant d'apporter des modifications et améliorations selon vos demandes.
                        </p>
                    </div>
                </div>
        </section>
    </div>
  );
}

export default Home;
