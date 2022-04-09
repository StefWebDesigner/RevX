import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-pro-sidebar/dist/css/styles.css';
import './custom.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Admin from "./components/admin/Admin";
import Signup from "./components/users-comps/Signup";
import Login from "./components/users-comps/Login";
import Home from "./components/home/Home";
import {useState} from "react";
import DataContext from "./dataStore/dataStore";
import UserPanel from "./components/admin/admin-groups/UserPanel";
import SurveyPanel from "./components/admin/admin-groups/SurveyPanel";
import ContentPanel from "./components/admin/admin-groups/ContentPanel";


function App() {

    //GROUNDING USER STATE IN THE APP
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  return (

      //APPLIES THE DATASTORE & BINDS TO ENTIRE APP
      //CREATES GLOBAL ACCESSIBILITY
      <DataContext.Provider
        value={{
            user, setUser
        }}>
          <Router>
              <Routes>
                  {/*ROUTES FOR HOME NAV*/}
                  <Route path="/" element={<Home/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/signup" element={<Signup/>}/>
                  <Route path="/admin" element={<Admin/>}/>

                  {/*ROUTES FOR ADMIN*/}
                  <Route path="/userpanel" element={<UserPanel/>}/>
                  <Route path="/surveypanel" element={<SurveyPanel/>}/>
                  <Route path="/contentpanel" element={<ContentPanel/>}/>
              </Routes>
          </Router>
      </DataContext.Provider>
  );
}

export default App;
