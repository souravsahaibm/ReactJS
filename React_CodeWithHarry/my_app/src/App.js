
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';

function App() {
  return (
    <div className="container">
     <Navbar title="TextUtil" about="About Us"/>
     {/* <Navbar title="TextUtil" /> */}
     <TextForm/>
    </div>
  );
}

export default App;
