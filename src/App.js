import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css";
import LoginScreen from "./screen/LoginScreen";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="App container pt-5">
        <LoginScreen/>
      </div>
    </AuthProvider>
  );
}

export default App;
