import classes from "./Avatar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const Avatar = () => {
  return (
    <section className={classes.avatar}>
      <div className={classes.bg}>
        <div className={classes.textBox}>
          <h2 className={classes.heading}>
            Feel like you're meeting face-to-face
          </h2>
          <p className={classes.para}>
            Check out these VRChat-compatible avatar creation systems!
          </p>

          <div className={classes.looking}>
            <div className={classes.lookBox}>
              <h4 className={classes.lookHeading}>Looking for an avatar?</h4>
              <p className={classes.paralook}>
                Check out these VRChat-compatible avatar creation systems!
              </p>
            </div>

            <div className={classes.btnBox}>
              <button className={classes.btn}>
                Check Avatar <FontAwesomeIcon icon={faArrowRightLong} />
              </button>
            </div>
          </div>
        </div>
        <div className={classes.avatarBox}>
          <img className={classes.avImg} src="assets/man.png" alt="man" />
        </div>
      </div>
    </section>
  );
};

export default Avatar;
