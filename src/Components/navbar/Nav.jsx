import { Outlet } from "react-router-dom";
import styles from "./nav.module.css";
const Nav = () => {
    return (
        <div>
            <div className={styles.navBar}>
                <div className={styles.logoSection}>
                    <p className={styles.logo}></p>
                    <hr />
                    <div className={styles.logoText}>
                        <h1>SJCET PALAI</h1>
                        <p>COMPUTER SOCIETY <br /> OF INDIA</p>
                    </div>
                </div>
                <div className={styles.menuSection}>
                    <p>Home</p>
                    <p>About</p>
                    <p>Events</p>
                    <p>Team</p>
                    <p>Gallery</p>
                    <p>Contact</p>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Nav