import { Fragment } from "react";
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Usecase from "./components/Usecase/Usecase";
import Subscribe from "./components/Subscribe/Subscribe"
import Footer from "./components/Footer/Footer"
import Avatar from "./components/Avatar/Avatar";
import Showcase from "./components/Showcase/Showcase";

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Usecase />
      <Avatar />
      <Showcase />
      <Subscribe />
      <Footer />
    </Fragment>
  );
}

export default App;
