import classes from "./Showcase.module.css";

const Showcase = () => {
  return (
    <section className={classes.showcase}>
      <div className={classes.showDiv}>
        <div className={classes.headingBox}>
          <h2 className={classes.heading}>Showcase</h2>
          <p className={classes.para}>
            The future for design and collaboration in VR
          </p>
        </div>

        <div className={classes.imageContainer}>
          <div className={classes.imageBox}>
            <img src="assets/Picture1.jpg" alt="picture1" />
          </div>
          <div className={classes.imageBox}>
            <img src="assets/Picture2.png" alt="picture1" />
          </div>
          <div className={classes.imageBox}>
            <img src="assets/Picture3.png" alt="picture1" />
          </div>
          <div className={classes.imageBox}>
            <img src="assets/Picture4.png" alt="picture1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
