import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import './App.css';
import ModalConfirm from "./screen/ModalConfirm";
import PincodeLoginScreen from "./screen/PincodeLoginScreen";

import { AiFillAlert } from "react-icons/ai";

function App() {
  return (
    <div className="App container">
      {/* <PincodeLoginScreen/> */}
      <ModalConfirm bodyText="Etes vous certain de vouloir supprimer cette ligne ?" buttonPosition="" TextIcon={AiFillAlert}/>
    </div>
  );
}

export default App;
