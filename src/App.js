import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer"
import Services from "./components/Services";
import { Toaster } from "react-hot-toast";
import SocialLinksSmall from "./components/SocialLinksSmall";

function App() {
  return (
    <div>
      <Toaster />
      <NavBar />
      <Home />
      <About />
      <Services />
      <Experience />
      <Contact />
      <Footer />
      {/* <SocialLinks />
      <SocialLinksSmall/> */}

      {window.innerWidth > 768 ? (
        <SocialLinks />
      ) : (
        <SocialLinksSmall />
      )}
    </div>
  );
}

export default App;
