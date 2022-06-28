import React from "react";
import { auth } from "../../FirebaseConfig";
import "./Subscribe.css";

import { Auth } from "../../FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { useEffect, useState } from "react";

const Subscribe = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [status, setStatus] = useState(false);

  useEffect(() => {
    setFname(localStorage.getItem("first"));
    setLname(localStorage.getItem("last"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(Auth, email, password)
      .then((userCredential) => {
        // Signed in
        setStatus(true);
        const user = userCredential.user;
        localStorage.setItem("userid", user.uid);
        localStorage.setItem("email", email);
        localStorage.setItem("first", fname);
        localStorage.setItem("last", lname);
        sendEmailVerification(Auth.currentUser).then(() =>
          alert("Check your Inbox & Verify your email address")
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

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
            <form action="" className="form" onSubmit={submitHandler}>
              <input
                type="text"
                className="subs-input"
                placeholder="First Name"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
              <input
                type="text"
                className="subs-input l-input"
                placeholder="Last Name"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
              <input
                type="email"
                className="subs-input mail-input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className="subs-input pass-input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="subbtn" onClick={submitHandler}>
                Submit
              </button>
            </form>
            {status && (
              <p
                style={{
                  color: "white",
                  fontSize: "16px",
                  textAlign: "center",
                }}
              >
                {" "}
                Thank you for Signing Up !
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
