import styles from './homepage.module.css'
import NavBar from '../../components/navbar/navbar'
import HomeComp from '../../components/homecomp/homecomp'

const HomePage = () => {
  return(
    <>
      <div className={styles.homepage}>
        <NavBar />
        <HomeComp />
      </div>
    </>
  )
}

export default HomePage;