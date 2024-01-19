import React from 'react';
import {BrowserRouter as Router , Link, Route, Routes} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from './pages/Base';
import Admin from './pages/Admin';
import { AuthContext }from "./context/auth"


import './App.css';

function App() {
  return (
    <AuthContext.Provider value = {false}>
      <Router>
        <div>
          <ul>
            <li>
              <Link to ="./">Base</Link>
            </li>
            <li>
              <Link to ="./about">About</Link>
            </li>
          </ul>
          <Routes>
              <Route>
                <Route exact path="/" component={Home} />
                <PrivateRoute exact path="/about" component={Admin} />
              </Route>
          </Routes>
        </div>
      </Router>
    </AuthContext.Provider>
  )
}

export default App;


