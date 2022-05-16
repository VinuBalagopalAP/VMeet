import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
// import { HashLink } from "react-router-hash-link";
// import Link from "react-scroll/modules/components/Link";
// import Logo from "./header_logo.png"

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.row}>
        <div className={classes.vmeetlogo}>
          <img
            className={classes.karma}
            src="assets/logo-vmeet.png"
            alt="Vmeet logo"
          />
          <p className={classes.para}>
          Meet, share and collaborate together in private 3D virtual spaces.
          </p>
        </div>

        <div className={classes.col}>
          <h3>Contact us</h3>
          <p>KMCT College Of Engineering, Kallanthode</p>
          <p>NITC - P.O</p>
          <p>Kozhikode - 673601</p>

          {/* <p className={classes.email}>finushaheem@gmail.com</p> */}
      
        </div>

        <div className={`${classes.col} ${classes.links}`}>
          <h3>Links</h3>
          <ul>
            <span
              to="/#home"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>About</li>
            </span>

            <span
              to="/#contact"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Contact us</li>
            </span>

            <span
              href="https://docs.google.com/document/d/1cJfjOhoEfW_JhiMF-tUJXNWwRKxSIN-KrIlJCnh0EZ4/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Privacy policy</li>
            </span>

            <span
              href="https://docs.google.com/document/d/1VOnAodNTeF8ShOCxxVb_AXnxLKg2jKZCUY0QxbQd4nE/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Terms and condition</li>
            </span>
          </ul>
        </div>

        <div className={classes.col}>
          <h3>Follow us on</h3>
          <div className={classes.socialIcons}>
            <span href="https://instagram.com/">
              <FontAwesomeIcon className={classes.icons} icon={faInstagram} />
            </span>
            <span href="https://www.youtube.com/">
              <FontAwesomeIcon className={classes.icons} icon={faYoutube} />
            </span>
            <span href="https://www.facebook.com/">
              <FontAwesomeIcon className={classes.icons} icon={faFacebook} />
            </span>
          </div>
        </div>
      </div>
      <hr className={classes.hr} />
      <p className={classes.copyright}>

      Vmeet | Copyright &#169; All rights reserved.

      </p>
    </footer>
  );
};

export default Footer;
