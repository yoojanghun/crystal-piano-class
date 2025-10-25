import sujungPic from "../../assets/sujung.webp";
import styles from "./Header.module.css";

function Header() {

  return(
    <header className={styles.header}>
      <nav className={styles.nav}>
        <img 
          src={sujungPic} 
          alt="sujung pic" 
          className={styles.logo}
        />
        <ul className={styles.navList}>
          <li className={styles.navItem}>About us</li>
          <li className={styles.navItem}>Program</li>
          <li className={styles.navItem}>Recruit</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;