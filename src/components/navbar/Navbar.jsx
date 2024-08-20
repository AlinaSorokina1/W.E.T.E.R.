import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import styles from '../../styles/navbar/Navbar.module.scss'; 

import tgIcon from '../../assets/images/iconsNavbar/TG-nav.svg';
import waIcon from '../../assets/images/iconsNavbar/WA-nav.svg';

import burgerMenu from '../../assets/images/iconsNavbar/Burger-menu.svg'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className={`${styles.navbar__container} ${isOpen ? styles.active : ''}`}>
        <div className={styles.burgerMenu} onClick={toggleSidebar}>
          <img src={burgerMenu}></img>
        </div>
        <ul className={`${styles.navMainMenu} ${isOpen ? styles.active : ''}`}>
          <li>
            <NavLink to=''>Главная страница</NavLink>
          </li>
          <li>
            <NavLink to=''>Кабинет инвестора</NavLink>
          </li>
        </ul>
        <div className={styles.navSocialLinks}>
          <ul>
            <li>
              <a
                href='https://t.me/WETERNEWSGOROD'
                target='_blank'
                rel='noopener noreferrer'>
                <img src={tgIcon} alt='Telegram' />
              </a>
            </li>
            <li>
              <a
                href='https://wa.me'
                target='_blank'
                rel='noopener noreferrer'>
                <img src={waIcon} alt='WhatsApp' />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.navLanguageSelector}>
          <LanguageSelector />
        </div>
      </nav>

      <nav className={`${styles.sidebar__container} ${isOpen ? styles.active : ''}`}>
        <ul className={styles.navMainMenu}>
          <li>
            <NavLink to=''>Главная страница</NavLink>
          </li>
          <li>
            <NavLink to=''>Кабинет инвестора</NavLink>
          </li>
        </ul>

        <div className={styles.navSocialLinks}>
          <ul>
            <li>
              <a
                href='https://t.me/WETERNEWSGOROD'
                target='_blank'
                rel='noopener noreferrer'>
                <img src={tgIcon} alt='Telegram' />
              </a>
            </li>
            <li>
              <a
                href='https://wa.me'
                target='_blank'
                rel='noopener noreferrer'>
                <img src={waIcon} alt='WhatsApp' />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;