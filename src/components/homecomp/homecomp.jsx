import styles from './homecomp.module.css'

const HomeComp = () => {
  return(
    <>
      <div className={styles.homecomp}>
        <div className={styles.contents}>
          <h2 className={styles.headsmall}>SO, YOU WANT TO TRAVEL TO</h2>
          <h1 className={styles.headlarge}>SPACE</h1>
          <p className={styles.paragraph}>Let’s face it; if you want to go to space, you might as well genuinely go to 
  outer space and not hover kind of on the edge of it. Well sit back, and relax 
  because we’ll give you a truly out of this world experience!</p>
        </div>
        <div className={styles.btndiv}>
          <button className={styles.btn}>EXPLORE</button>
        </div>
      </div>
    </>
  )
}

export default HomeComp;