import {useMediaQuery} from "react-responsive"
import './App.css';
import Inicio from "./compontes/inicio";
import Login from "./compontes/login";
import Mapas from "./compontes/mapas";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 450px)" });

  return (
    <div className="App">
        {isMobile && (<Mapas />)}
    </div>
  );
}

export default App;
