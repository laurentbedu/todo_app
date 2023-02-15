import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

import ModalConfirm from "./screen/ModalConfirm";
import "./App.css";
// import PincodeLoginScreen from "./screen/PincodeLoginScreen";

import { AiFillAlert, AiFillCloseCircle, AiFillAudio } from "react-icons/ai";
import LoginScreen from "./screen/LoginScreen";

function App() {
  return (
    <div className="App container pt-5">

      {/* <LoginScreen/> */}


      {/* <PincodeLoginScreen/> */}
      <ModalConfirm
        headerText="Message"
        LeftIcon={AiFillAlert}
        RightIcon={AiFillCloseCircle}
        messageText="Supprimer cette ligne ?"
        MessageIcon={AiFillAudio }
        ConfirmButtonIcon = {AiFillAlert}
        // leftIconClass="text-info"
        // rightIconClass="text-success"
        // Separator={null}
      />
    </div>
  );
}

export default App;
