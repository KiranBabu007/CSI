import styles from './Hero.module.css'
const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.main}>
                <h1>Welcome to <br /> CSI SJCET</h1>
                <button>Join our community</button>

                <div className={styles.hr}>
                    <p>Events</p>
                    <hr />
                </div>

                <div className={styles.events}>
                    <div className={styles.card}>

                    </div>
                    <div className={styles.card}>

                    </div>
                    <div className={styles.card}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero