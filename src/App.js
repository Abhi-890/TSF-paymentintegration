import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./components/pages/homepage/homepage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Homepage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
