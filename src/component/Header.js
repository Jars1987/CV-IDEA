import React from 'react';

const styles = {
  headerContainer: `w-7/12 mx-auto py-8 z-1`,
  sectionsContainer: `grid grid-cols-5`,
  section: `cursor-pointer py-3 group`,
  sectionItem: `text-2xl text-white group-hover:scale-110 underline-offset-4 uppercase px-2 text-center tracking-widest font-cinzelDecorative duration-150 `,
  logoEnvelope: `mx-auto`,
  logoContainer: `rounded-full bg-white p-3 `,
  logo: `text-4xl text-black font-serif tracking-wide font-semibold`,
};

function Header({ loreRef }) {
  const linkToRef = () => {
    loreRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header>
      <div className={styles.headerContainer}>
        <div className={styles.sectionsContainer}>
          <div className={styles.section} onClick={linkToRef}>
            <p className={styles.sectionItem}>Lore</p>
          </div>
          <div className={styles.section}>
            <p className={styles.sectionItem}>Showroom</p>
          </div>
          <div className={styles.logoEnvelope}>
            <div className={styles.logoContainer}>
              <p className={styles.logo}>JS</p>
            </div>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionItem}>Road Map</p>
          </div>
          <div className={styles.section}>
            <p className={styles.sectionItem}>Contact</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
