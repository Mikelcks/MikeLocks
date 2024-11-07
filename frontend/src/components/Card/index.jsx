/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './card.module.scss';

const Card = ({ url, title, type, description, pictures }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const cardRef = useRef(null);

    // Add a duplicate of the first image at the end
    const extendedPictures = [...pictures, pictures[0]];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(cardRef.current);
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    // Image carousel with continuous effect
    useEffect(() => {
        if (isLightboxOpen) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                // If reaching the duplicated last image, reset to the first without transition
                if (prevIndex === pictures.length) {
                    setIsTransitioning(false);
                    return 0;
                }
                setIsTransitioning(true);
                return prevIndex + 1;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [pictures.length, isLightboxOpen]);

    // Reset the transition effect on reset to the first image
    useEffect(() => {
        if (!isTransitioning) {
            const timeout = setTimeout(() => setIsTransitioning(true), 50); // Small delay for smooth reset
            return () => clearTimeout(timeout);
        }
    }, [isTransitioning]);

    const handleImageClick = (e) => {
        e.stopPropagation();
        setIsLightboxOpen(true);
    };

    const handleLightboxClose = () => {
        setIsLightboxOpen(false);
    };

    const handleLinkClick = () => {
        if (!isLightboxOpen) {
            window.open(url, '_blank');
        }
    };

    const goToPrevious = (e) => {
        e.stopPropagation();
        setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
    };

    const goToNext = (e) => {
        e.stopPropagation();
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    };

    return (
        <>
            <div
                onClick={handleLinkClick}
                style={{ textDecoration: 'none' }}
                className={styles.cardWrapper}
            >
                <div
                    className={`${styles.cardContent} ${isVisible ? styles.fadeIn : ''}`}
                    ref={cardRef}
                >
                    <div className={styles.textContainer}>
                        <h3 className={styles.cardTitle}>{title}</h3>
                        <p className={styles.cardText}>Type : {type}</p>
                        <p className={styles.cardText}>{description}</p>
                    </div>
                    
                    <div className={styles.carouselContainer}>
                        <div
                            className={styles.imageWrapper}
                            style={{
                                transform: `translateX(-${currentIndex * 100}%)`,
                                transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
                            }}
                        >
                            {extendedPictures.map((picture, index) => (
                                <div key={index} style={{ flex: '0 0 100%' }}>
                                    <img
                                        className={styles.cardPictures}
                                        src={picture}
                                        alt={`${title} image ${index + 1}`}
                                        onClick={handleImageClick}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {isLightboxOpen && (
                <div className={styles.lightboxOverlay} onClick={handleLightboxClose}>
                    <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.prevArrow} onClick={goToPrevious}>❮</button>
                        <img
                            src={pictures[currentIndex]}
                            alt={`${title} enlarged`}
                            className={styles.lightboxImage}
                        />
                        <button className={styles.nextArrow} onClick={goToNext}>❯</button>
                        <button className={styles.closeButton} onClick={handleLightboxClose}>✖</button>
                    </div>
                </div>
            )}
        </>
    );
};

Card.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Card;
