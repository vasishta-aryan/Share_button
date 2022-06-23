import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";

function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
