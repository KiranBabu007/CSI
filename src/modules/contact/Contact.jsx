/* eslint-disable react/no-unescaped-entities */
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contactSection}>
      <div className={styles.map}>
        <iframe
          width="100%"
          height="100%"
          title="map"
          className="absolute inset-0"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          style={{ filter: "opacity(0.7)" }}
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.4622776506326!2d76.72351987417689!3d9.726851977676983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07cc024cb7c83f%3A0xc8944aaebb3ba492!2sSt.%20Joseph&#39;s%20College%20of%20Engineering%20and%20Technology%2C%20Palai!5e0!3m2!1sen!2sin!4v1707921087688!5m2!1sen!2sin"
        />
      </div>
      <div className={styles.contactDetails}>
        <h1>Connect with us</h1>
        <div className={styles.details}>
          <p>
            <span>
              <i className="fi fi-ss-marker"></i>{" "}
            </span>
            St. Joseph's College of Engineering and Technology, <br />
            Choondacherry, Palai,
            <br />
            Kerala, India <br />
            686579
          </p>
          <a href="mailto:csi@sjcetpalai.ac.in">
            <span>
              <i className="fi fi-ss-envelope"></i>{" "}
            </span>
            csi@sjcetpalai.ac.in
          </a>
          <a href="tel:+"></a>
          <a href="tel:+91123456789">
            <span>
              <i className="fi fi-sr-phone-call"></i>{" "}
            </span>
            +91123456789
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
