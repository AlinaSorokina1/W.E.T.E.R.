import React, { useState } from 'react';

import styles from '../../styles/navbar/LanguageSelector.module.scss'

import vectorIcon from '../../assets/images/iconsNavbar/Vector.svg';

import englishFlag from '../../assets/images/iconsLangSelector/englishFlag.svg';
import russianFlag from '../../assets/images/iconsLangSelector/russianFlag.svg';
import indonesianFlag from '../../assets/images/iconsLangSelector/indonesianFlag.svg';
import italianFlag from '../../assets/images/iconsLangSelector/italianFlag.svg';
import hindiFlag from '../../assets/images/iconsLangSelector/hindiFlag.svg';
import bengaliFlag from '../../assets/images/iconsLangSelector/bengaliFlag.svg';
import vietnamFlag from '../../assets/images/iconsLangSelector/vietnamFlag.svg';
import koreanFlag from '../../assets/images/iconsLangSelector/koreanFlag.svg';
import japanFlag from '../../assets/images/iconsLangSelector/japanFlag.svg';
import frenchFlag from '../../assets/images/iconsLangSelector/frenchFlag.svg';
import spanishFlag from '../../assets/images/iconsLangSelector/spanishFlag.svg';
import chineseFlag from '../../assets/images/iconsLangSelector/chineseFlag.svg';
import arabianFlag from '../../assets/images/iconsLangSelector/arabianFlag.svg';
import portugueseFlag from '../../assets/images/iconsLangSelector/portugueseFlag.svg';

const LanguageSelector = () => {
  const languages = [
    { code: 'EN', name: 'English', flag: englishFlag },
    { code: 'RU', name: 'Russian', flag: russianFlag },
    { code: 'ID', name: 'Indonesian', flag: indonesianFlag },
    { code: 'IT', name: 'Italian', flag: italianFlag },
    { code: 'HI', name: 'Hindi', flag: hindiFlag },
    { code: 'BN', name: 'Bengali', flag: bengaliFlag },
    { code: 'VI', name: 'Vietnam', flag: vietnamFlag },
    { code: 'KO', name: 'Korean', flag: koreanFlag },
    { code: 'JA', name: 'Japan', flag: japanFlag },
    { code: 'FR', name: 'French', flag: frenchFlag },
    { code: 'ES', name: 'Spanish', flag: spanishFlag },
    { code: 'CN', name: 'Chinese', flag: chineseFlag },
    { code: 'AR', name: 'Arabian', flag: arabianFlag },
    { code: 'PT', name: 'Portuguese', flag: portugueseFlag },
  ];

  const [selectedLang, setSelectedLang] = useState(() => {
    const savedLang = localStorage.getItem('selectedLanguage');
    return savedLang ? languages.find(lang => lang.code === savedLang) : languages.find(lang => lang.code === 'RU');
});

  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    setSelectedLang(lang);
    localStorage.setItem('selectedLanguage', lang.code);
    setIsOpen(false); 
  };

  return (
    <div className={styles.languageSelector}
    onMouseEnter={() => setIsOpen(true)} 
    onMouseLeave={() => setIsOpen(false)} >
       
      <span className={styles.selectedLanguage} onClick={() => setIsOpen(!isOpen)}>
        {selectedLang.code}
      </span>
      <img src={vectorIcon} className={styles.vectorIcon}/>
      {isOpen && (
        <div
          className={styles.languageDropdown}
        >
          {languages.map((lang) => (
            <div
              key={lang.code}
              className={styles.languageOption}
              onClick={() => handleLanguageChange(lang)}
            >
              <img src={lang.flag} alt={lang.name} />
              {lang.name} 
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
