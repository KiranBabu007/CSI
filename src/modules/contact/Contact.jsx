/* eslint-disable react/no-unescaped-entities */
import styles from './contact.module.css'

const Contact = () => {
    return (
        <div className={styles.contactSection}>
            <div className={styles.map}></div>
            <div className={styles.contactDetails}>
                <h1>Connect with us</h1>
                <div className={styles.details}>
                    <p>
                        <span><i className="fi fi-ss-marker"></i> </span>
                        St. Joseph's College of Engineering and Technology, <br />
                        Choondacherry, Palai,<br />
                        Kerala,  India <br />
                        686579
                    </p>
                    <a href="mailto:csi@sjcetpalai.ac.in">
                        <span><i className="fi fi-ss-envelope"></i> </span>
                        csi@sjcetpalai.ac.in
                    </a>
                    <a href="tel:+"></a>
                    <a href="tel:+91123456789">
                        <span><i className="fi fi-sr-phone-call"></i> </span>
                        +91123456789
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact