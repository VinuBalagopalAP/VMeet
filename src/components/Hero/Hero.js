import "./Hero.css"
import video from "./hero-video.mp4"

const Hero = () => {
    return (
        <section>
            <div className="overlay"></div>
            <div className="hero">
            <video  controls="" autoPlay loop muted className="video">
                <source src={video} type="video/mp4" />
            </video>
            </div>

            <div className="herobox">
                <h1 className="heading">The Future of Meetings</h1>
                <p className="heading-para">Vmeet is a virtual collaboration platform that allows you to have a life like social experience. Imagine a virtual extension of your workspace in which physical boundaries disappear.</p>
                <button className="hero-btn">Get Started</button>
            </div>
        </section>
    )
}

export default Hero;