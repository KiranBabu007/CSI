import styles from "./Hero.module.css";
import bg1 from "../../assets/images/events1.png";
import bg2 from "../../assets/images/events2.png";
import bg3 from "../../assets/images/events3.png";
import workshop from "../../assets/images/workshop.jpg";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.main}>
        <h1>
          Welcome to <br /> CSI SJCET
        </h1>
        {/* <button>Join our community</button> */}

        <div className={styles.hr}>
          <p>Events</p>
          <hr />
        </div>

        <div className={styles.eventContainer}>
          <div className={styles.events}>
            <div
              style={{ backgroundImage: `url(${bg1})` }}
              className={styles.card}
            ></div>
            <div
              style={{ backgroundImage: `url(${bg2})` }}
              className={styles.card}
            ></div>
            <div
              style={{ backgroundImage: `url(${bg3})` }}
              className={styles.card}
            ></div>
            <div
              style={{ backgroundImage: `url(${workshop})` }}
              className={styles.card}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
