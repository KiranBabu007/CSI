import { useState, useEffect } from "react";
import styles from './NavBar.module.css'
import { Outlet } from "react-router-dom";

const NavBar = () => {
    const [sideNavDisplay, setSideNavDisplay] = useState(
        window.innerWidth > 830 ? "flex" : "none"
    );
    const [marginTop, setMarginTop] = useState("0px");
    const [transform2, setTransform2] = useState("0deg");
    const [transform3, setTransform3] = useState("0deg");
    const [hamburgerIconDisplay, setHamburgerIconDisplay] = useState("block");

    useEffect(() => {
        const handleResize = () =>
            setSideNavDisplay(window.innerWidth > 830 ? "flex" : "none");

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const animateHamburgerIcon = () => {
        setMarginTop(hamburgerIconDisplay === "none" ? "0px" : "-14.5px");
        setTransform2(hamburgerIconDisplay === "none" ? "0deg" : "135deg");
        setTransform3(hamburgerIconDisplay === "none" ? "0deg" : "45deg");
        setHamburgerIconDisplay(hamburgerIconDisplay === "none" ? "block" : "none");
    };

    const toggleSideNavBar = () => {
        animateHamburgerIcon();
        setSideNavDisplay(sideNavDisplay === "none" ? "flex" : "none");

    };

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
                <div className={styles.menuSection} style={{ display: `${sideNavDisplay}` }}>
                    <p>Home</p>
                    <p>About</p>
                    <p>Events</p>
                    <p>Team</p>
                    <p>Gallery</p>
                    <p>Contact</p>
                </div>
            {/* Hamburger Menu */}
            <div className={styles.navButton} onClick={toggleSideNavBar}>
                <div style={{ transform: `rotate(${transform2})`, marginBottom: `${marginTop}` }} className={styles.navButton1}></div>
                <div style={{ transform: `rotate(${transform3})` }} className={styles.navButton2}></div>
                <div style={{ display: `${hamburgerIconDisplay}` }} className={styles.navButton3}></div>
            </div>
            </div>
            <Outlet />
        </div>
    )
}

export default NavBar;
