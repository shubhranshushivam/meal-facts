import { useState } from "react";
import "./App.scss";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Instruction from "./components/instruction/Instruction";
import Loading from "./components/loading/Loading";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Result from "./components/result/Result";
import Scan from "./components/scan/Scan";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resultOpen, setResultOpen] = useState(false);
  const [scanOpen, setScanOpen] = useState(true);

  const toggleViews = () => {
    setResultOpen(!resultOpen);
    setScanOpen(!scanOpen);
  };
  return (
    <div className="App">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="sections">
        <Home />

        {(resultOpen===false) && <Scan toggleViewFn={toggleViews}/>}
        {(scanOpen===false) && <Result toggleViewFn={toggleViews}/>}
        
        <Instruction />
        <About />
      </div>
    </div>
  );
}

export default App;
