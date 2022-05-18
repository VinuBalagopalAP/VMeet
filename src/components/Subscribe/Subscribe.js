import "./Subscribe.css";

const Subscribe = () => {
  // const [email, setemail] = useState('');
  // const [password, setpassword] = useState('');
  // const auth = getAuth();
  // const signup = (event) => {
  //     event.preventDefault();
  //     sendSignInLinkToEmail(auth, email)
  //         .then(() => {
  //             // The link was successfully sent. Inform the user.
  //             // Save the email locally so you don't need to ask the user for it again
  //             // if they open the link on the same device.
  //             alert("send email")
  //             window.localStorage.setItem('emailForSignIn', email);
  //             // ...
  //         }).catch((error) => {
  //             const errorCode = error.code;
  //             const errorMessage = error.message;
  //             // ...
  //         });

  // }

  return (
    <section className="subSection">
      <div className="subscribe">
        <div className="subs-img-box">
          <img src="assets/vr.jpg" alt="/" className="subs-image" />
        </div>

        <div className="subs-content-box">
          <div className="subs-heading-box">
            <h1 className="subs-heading">
              Sign up to explore our alternative reality
            </h1>
          </div>

          <div className="subs-form">
            <div className="sub-form-headingBox">
              <h3 className="sub-form-heading">Sign in</h3>
            </div>
            <form action="" className="form">
              <input
                type="text"
                className="subs-input"
                placeholder="First Name"
              />
              <input
                type="text"
                className="subs-input l-input"
                placeholder="Last Name"
              />
              <input
                type="email"
                className="subs-input mail-input"
                placeholder="Email"
              />
              <input
                type="password"
                className="subs-input pass-input"
                placeholder="Password"
              />
              <button className="subbtn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
  // onChange={(e) => { setemail(e.target.value) }}
  // onChange={(e) => { setpassword(e.target.value) }}
};

export default Subscribe;
