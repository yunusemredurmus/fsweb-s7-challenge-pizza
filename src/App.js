import React from "react";
import Home from './layout/Home'
import SiparisVer from "./pages/SiparisVer";
import ConfirmOrder from "./pages/ConfirmOrder";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/SiparisVer/:id" component={SiparisVer} />
        <Route exact path="/confirmorder/:id" component={ConfirmOrder} />
      </Switch>
    </Router>
  );
};

export default App;
