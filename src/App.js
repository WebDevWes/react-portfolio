import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Wrapper from "./components/Wrapper";

function App() {

  //const [Nav, setNav] = useState("about");

  return (
    <Router>
        <NavBar />
        <Wrapper>
          <Route exact path="/" component={About}/>
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
        <Footer />
    </Router>
  );
}

export default App;
