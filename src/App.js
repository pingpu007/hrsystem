import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Firstpage from './components/firstpage'
import DateTime from './components/firstpage/timedate.js';
import Timeattendance from './components/timeattendancepage'
import Loginpage from './components/loginpage'

function App() {
  return (
    <div className="App">
      <DateTime />
      {/* <Timeattendance /> */}
      <Router>
        <Switch>
          <Route exact path="/" render={(props) => <Firstpage {...props} />}></Route>
          <Route exact path="/timeattend" render={(props) => <Timeattendance {...props} />}></Route>
          <Route exact path="/login" render={(props) => <Loginpage {...props} />}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
