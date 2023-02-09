import './App.css';
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Tour } from "./components/Pages/Tour";
import { Album } from "./components/Pages/Album";
import { Contact } from "./components/Pages/Contact";

function App() {
  return (
    <div className="App">
      
      <Router>
      <NavBar />
        <div className="pages">
          <Routes>
            <Route exact path="/" element={ <Home /> } />
            <Route path="/About" element={ <About />} />
            <Route path="/Tour" element={ <Tour />} />
            <Route path="/Album" element={ <Album />} />
            <Route path="/Contact" element={ <Contact /> } />
          </Routes>
        </div>
      </Router>

      <About/>
      <Tour/>
      <Album/>
      <Contact/>
      
    </div>
  );
}

export default App;
