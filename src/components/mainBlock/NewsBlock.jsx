import React from 'react';

import styles from '../../styles/mainBlock/NewsBlock.module.scss';

import NewsImage from '../../assets/images/iconsNewsBlock/NewsImage.svg';
import LikeIcon from '../../assets/images/iconsNewsBlock/LikeIcon.svg';
import ViewIcon from '../../assets/images/iconsNewsBlock/ViewIcon.svg';
import VectorLink from '../../assets/images/iconsNewsBlock/VectorLink.svg';
import VectorPrev from '../../assets/images/iconsNewsBlock/VectorPrev.svg';

function NewsBlock() {
  return (
    <div className={styles.NewsBlock}>
      <div className={styles.news__container}>
        <div className={styles.newsDate}>
          <p className={styles.date}>06 Декабря</p>
          <p className={styles.time}>16:24</p>
        </div>
        <div className={styles.newsInfo}>
          <img src={NewsImage} className={styles.newsImage} alt='News' />
          <p className={styles.newsTitle}>Бизнес-встреча в Дубаи</p>
        </div>
        <div className={styles.addInfoNews}>
          <div className={styles.reactionsNews}>
            <div className={styles.reactionViewItem}>
              <img src={ViewIcon} alt='Views' className={styles.viewIcon} />
              <span>18k</span>
            </div>
            <div className={styles.reactionLikeItem}>
              <img src={LikeIcon} alt='Likes' className={styles.likeIcon} />
              <span>3974</span>
            </div>
          </div>
          <div className={styles.linkNews}>
            <a href='' target='_blank' rel='noopener noreferrer'>
              Читать
            </a>
            <img src={VectorLink} alt='Link' />
          </div>
        </div>
      </div>
      <div className={styles.navNews}>
        <div>
          <img src={VectorPrev} alt='Link' />
          <span>Предыдущая</span>
        </div>
        <div className={styles.separator}></div>
        <span>Следующая</span>
      </div>
    </div>
  );
}

export default NewsBlock;
