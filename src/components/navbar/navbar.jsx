import styles from './navbar.module.css';
import Icon from '../../assets/shared/logo.svg';

const NavBar = () => {
  return(
    <>
      <div className={styles.navbar}>
        <img className={styles.img} src={Icon} />
        <div className={styles.line}></div>
        <ul className={styles.navlists}>
          <li className={styles.navlist}><span className={styles.spannum}>00</span> HOME</li>
          <li className={styles.navlist}><span className={styles.spannum}>01</span> DESTINATION</li> 
          <li className={styles.navlist}><span className={styles.spannum}>02</span> CREW</li>
          <li className={styles.navlist}><span className={styles.spannum}>03</span> TECHNOLOGY</li>
        </ul>
      </div>
    </>
  )
}

export default NavBar;