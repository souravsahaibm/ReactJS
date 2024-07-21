
import './App.css';
import Accordion from './Components/Accordion';
import Navbar from './Navbar';
import TextForm from './TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Navbar title="TextUtil" about="About Us" />
          {/* <Navbar title="TextUtil" /> */}
          <Routes>
            <Route exact path="/about" Component={Accordion}>
            </Route>
            <Route exact path="/" Component={TextForm}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
