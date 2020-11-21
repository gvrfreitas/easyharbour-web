import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Routes() {
  return (
    <Switch>
      <>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Footer />
      </>
    </Switch>
  )
}

export default Routes;
