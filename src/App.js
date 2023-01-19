import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderNav from "./components/headerNav/HeaderNav";
import KhayriLt from "./components/khayriLt/KhayriLt";
import CardsL from "./components/cardsL/CardsL";
import LogoL from "./components/logoL/LogoL";
import BlockPara from "./components/blockPara/BlockPara";
import BlockImg from "./components/blockimg/BlockImg";
import PresFinal from "./components/presFinal/PresFinal";
function App() {
  return (
    <div className="App">
      <HeaderNav />
      <KhayriLt />
      <CardsL />
      <LogoL />
      <div>
        <BlockPara />
      </div>
      <div style={{ marginTop: "90px" }}>
        <BlockImg />
      </div>

      <PresFinal />
    </div>
  );
}

export default App;
