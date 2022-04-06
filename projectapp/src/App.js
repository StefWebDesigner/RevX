import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Admin from "./components/admin/Admin";
import Signup from "./components/users-comps/Signup";
import Login from "./components/users-comps/Login";
import Home from "./components/home/Home";


function App() {
  return (
      <>
          <Router>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/signup" element={<Signup/>}/>
                  <Route path="/admin" element={<Admin/>}/>
              </Routes>
          </Router>
      </>
  );
}

export default App;
