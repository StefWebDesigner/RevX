import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-pro-sidebar/dist/css/styles.css';
import './custom.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Admin from "./components/admin/Admin";
import Home from "./components/home/Home";
import {useState} from "react";
import DataContext from "./dataStore/dataStore";
import UserPanel from "./components/admin/admin-groups/UserPanel";
import SurveyPanel from "./components/admin/admin-groups/SurveyPanel";
import ContentPanel from "./components/admin/admin-groups/ContentPanel";
import ChatMain from "./components/chat-components/ChatMain.js";
import Account from '../src/components/Accounts/accounts';
import SurveyForm from "./components/Survey/SurveyForm";


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
                  <Route path="/admin" element={<Admin/>}/>

                  {/*ROUTES FOR ADMIN*/}
                  <Route path="/userpanel" element={<UserPanel/>}/>
                  <Route path="/surveypanel" element={<SurveyPanel/>}/>
                  <Route path="/contentpanel" element={<ContentPanel/>}/> 
                  <Route path="/account" element={<Account/>}/>
                  <Route path="/surveyform" element={<SurveyForm/>}/>

                  {/*<Route path="/chat" element={<ChatMain/>}/>*/}
              </Routes>
          </Router>
      </DataContext.Provider>
  );
}

export default App;
