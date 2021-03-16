import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Firstpage from './components/firstpage'
import DateTime from './components/firstpage/timedate.js';
import Timeattendance from './components/timeattendancepage'
import Loginpage from './components/loginpage'
import Menupage from './components/menupage'
import Empropage from './components/empropage'
import Timeoffpage from './components/timeoffpage'
import Attendhisinpage from './components/attendpage'
import Attendhisoutpage from './components/attendpageout'
import Calendarpage from './components/calendar'

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
          <Route exact path="/menu" render={(props) => <Menupage {...props} />}></Route>
          <Route exact path="/empropage" render={(props) => <Empropage {...props} />}></Route>
          <Route exact path="/timeoffpage" render={(props) => <Timeoffpage {...props} />}></Route>
          <Route exact path="/attendinpage" render={(props) => <Attendhisinpage {...props} />}></Route>
          <Route exact path="/attendoutpage" render={(props) => <Attendhisoutpage {...props} />}></Route>
          <Route exact path="/calendarpage" render={(props) => <Calendarpage {...props} />}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
