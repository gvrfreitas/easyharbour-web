import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Operation from '../pages/Operacao';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Routes() {
  return (
    <Switch>
      <>
        <Header />
        <Route path="/" exact component={Dashboard} />
        <Route path="/operation" component={Operation} />
        <Footer />
      </>
    </Switch>
  )
}

export default Routes;
