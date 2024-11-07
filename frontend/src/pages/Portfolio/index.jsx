import React, { useState, useEffect } from 'react';
import styles from './portfolio.module.scss';
import Card from '../../components/Card';
import data from '../../data/data.json';

function Portfolio() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
  }, []);

  return (
    <div className={styles.portfolioWrapper}>
      <div className={styles.portfolioContainer}>
        <div className={styles.titleWrapper}>
          <h2>
            Projets scolaires
          </h2>
        </div>
        <div className={styles.galleryWrapper}>
          {items.map(item => (
            <Card
              key={item.id}
              url={item.url}
              title={item.title}
              type={item.type}
              description={item.description}
              pictures={item.pictures}
            />
          ))}
        </div>
        <div className={styles.titleWrapper}>
          <div className={styles.titleOverlay}></div>
          <h2>
            Création de site web
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
