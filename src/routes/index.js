import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Challenges from '../components/Challenges';
import Rewards from '../components/Rewards';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';

import Layout from '../components/Layout';
import Error from '../components/Error';

const Index = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={props => (
        <Layout {...props}>
        </Layout>
      )}
    />
    <Route
      path="/challenges"
      render={props => (
        <Layout {...props}>
          <Challenges {...props} />
        </Layout>
      )}
    />
    <Route
      path="/Rewards"
      render={props => (
        <Layout {...props}>
          <Rewards {...props} />
        </Layout>
      )}
    />
    <Route
      path="/about"
      render={props => (
        <Layout {...props}>
          <AboutUs {...props} />
        </Layout>
      )}
    />
    <Route
      path="/contact"
      render={props => (
        <Layout {...props}>
          <ContactUs {...props} />
        </Layout>
      )}
    />
    <Route
      render={props => (
        <Error {...props} title="404" content="Sorry, the route you requested does not exist" />
      )}
    />
  </Switch>
);

export default Index;