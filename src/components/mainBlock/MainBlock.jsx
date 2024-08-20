import React from 'react';

import logo from '../../assets/images/iconsMainBlock/Logo.svg';
import backgroundPhoto from '../../assets/images/iconsMainBlock/Background.svg';

import styles from '../../styles/mainBlock/MainBlock.module.scss'; 
import NewsBlock from './NewsBlock';

function MainBlock() {
  return (
    <div className={styles.MainBlock}>
      <img src={backgroundPhoto} />
      <div className={styles.namePage}>
        <img src={logo} />
        <h1>W.E.T.E.R</h1>
      </div>
      <div className={styles.description}>
        <p className={styles.descriptionTitle}>
          Wind Energy Technology Era Renewable
        </p>
        <p className={styles.descriptionText}>
          Здание, способное обеспечить себя электрической энергией с помощью
          ветра
        </p>
      </div>
      <NewsBlock/>
    </div>
  );
}

export default MainBlock;
