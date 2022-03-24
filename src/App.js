import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Preferences from './Components/Preferences';
import Login from './Components/Login';

function App() {
  const [token, setToken] = useState();
  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>

      <Dashboard/>
      <Preferences />
     </div>

    //  {/* <Dashboard/>
    //   <Preferences/> */}
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/Dashboard" element={ <Dashboard />}/>
    //         {/* <Dashboard />
    //       </Route> */}
    //       <Route path="/Preferences" element={ <Preferences />} />
    //         {/* <Preferences />
    //       </Route> */}
    //     </Routes>
    //   </BrowserRouter>


    // </div>
  );
}

export default App;
