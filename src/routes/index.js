import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ChallengesHome from '../container/ChallengesHome';
import Rewards from '../components/Rewards';
import AboutUs from '../components/AboutUs';
import Account from '../container/Account';
import Landing from '../container/Landing';
import ContactUs from '../components/ContactUs';

import Layout from '../components/Layout';
import Error from '../components/Error';
import SignUp from '../container/SignUp';
import SignIn from '../container/SignIn';
import PasswordForget from '../container/PasswordForget';

const Index = () => (
  <Switch>
    <Route
      path="/challenges"
      render={props => (
        <Layout {...props}>
          <ChallengesHome {...props} />
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
      exact
      path="/"
      render={props => (
        <Landing {...props} />
      )}
    />
    <Route
      exact
      path="/challenges/:challengeid"
      render={props => (
        <Landing {...props} />
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
      path="/signup"
      render={props => (
        <SignUp {...props} />
      )}
    />
    <Route
      path="/signin"
      render={props => (
        <SignIn {...props} />
      )}
    />
    <Route
      path="/passwordforget"
      render={props => (
        <PasswordForget {...props} />
      )}
    />
    <Route
      path="/account"
      render={props => (
        <Layout {...props}>
          <Account {...props} />
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
