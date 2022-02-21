import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WizardForm from "./components/WizardForm/WizardForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <WizardForm></WizardForm>
    </div>
  );
}

export default App;
