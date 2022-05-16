import "./Usecase.css"


const Usecase = () => {
    return (
        <section>
        <div className="usecase">
                
            <div className="use-heading-box">
                <h1 className="use-heading">Use-Cases</h1>
            </div>

            <div className="card-box">

                    <div className="card">
                        <div className="card-image">
                        <video  controls="" autoPlay loop muted className="video1">
                <source src="assets\workshops.mp4" type="video/mp4" />
            </video>
                        </div>
                        <h2 className="card-heading">Workshops</h2>
                        <p className="card-para">Entering Vmeet's creative spaces will take your brainstorming sessions and workshops to new heights. Our various room arrangements will inspire your participants' inventiveness. Vmeet lets you to engage with tools and work as if you were in a real-life workshop, only better! Magic pointer, 3D pen, 3D models, upgraded whiteboards, and much more!</p>
                    </div>

                    <div className="card">
                        <div className="card-image">
                        <video  controls="" autoPlay loop muted className="video1">
                <source src="assets\meetings.mp4" type="video/mp4" />
            </video>
                        </div>
                        <h2 className="card-heading">Meetings</h2>
                        <p className="card-para">Do you miss face-to-face meetings? Do you want to get involved? Inside Vmeet, all distractions are removed, and you meet as if you were in real life. You have all of the required equipment to make your meetings more efficient, whether they are team meetings or customer meetings. Feel the 3D sound of the other participants, and finish your meetings with our unique virtual handshake.</p>
                    </div>

            </div>

        </div>
        </section>
    )
}

export default Usecase;