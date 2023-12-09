import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import SecondPage from './pages/SecondPage';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/second-page/:id" component={SecondPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
