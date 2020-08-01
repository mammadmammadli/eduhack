import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Login } from './modules/login/components';

const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route path='/login'>
          <Suspense fallback={<>Loading...</>}>
            <Login />
          </Suspense>
        </Route>
      </Switch>
    </Router>
  </div>
)

export default App;
