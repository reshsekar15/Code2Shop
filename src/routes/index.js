import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ChallengesHome from '../container/ChallengesHome';
import ChallengePage from '../container/ChallengePage';
import Rewards from '../container/Rewards';
import AboutUs from '../container/About';
import Account from '../container/Account';
import Landing from '../container/Landing';
import ContactUs from '../container/Contact';

import Layout from '../components/Layout';
import Error from '../components/Error';
import PageNotFound from '../components/PageNotFound';
import SignUp from '../container/SignUp';
import SignIn from '../container/SignIn';
import PasswordForget from '../container/PasswordForget';

const Index = () => (
  <Switch>
    <Route
      exact
      path="/challenges"
      render={props => (
        <Error>
          <Layout {...props}>
            <ChallengesHome {...props} />
          </Layout>
        </Error>
      )}
    />
    <Route
      path="/Rewards"
      render={props => (
        <Error>
          <Layout {...props}>
            <Rewards {...props} />
          </Layout>
        </Error>
      )}
    />
    <Route
      exact
      path="/"
      render={props => (
        <Layout {...props}>
          <Landing {...props} />
        </Layout>
      )}
    />
    <Route
      exact
      path="/challenges/:challengeid"
      render={props => (
        <Error>
          <Layout {...props}>
            <ChallengePage {...props} />
          </Layout>
        </Error>
      )}
    />
    <Route
      path="/about"
      render={props => (
        <Error>
          <Layout {...props}>
            <AboutUs {...props} />
          </Layout>
        </Error>
      )}
    />
    <Route
      path="/contact"
      render={props => (
        <Error>
          <Layout {...props}>
            <ContactUs {...props} />
          </Layout>
        </Error>
      )}
    />
    <Route
      path="/signup"
      render={props => (
        <Error>
          <SignUp {...props} />
        </Error>
      )}
    />
    <Route
      path="/signin"
      render={props => (
        <Error>
          <SignIn {...props} />
        </Error>
      )}
    />
    <Route
      path="/passwordforget"
      render={props => (
        <Error>
          <PasswordForget {...props} />
        </Error>
      )}
    />
    <Route
      path="/account"
      render={props => (
        <Error>
          <Layout {...props}>
            <Account {...props} />
          </Layout>
        </Error>
      )}
    />
    <Route
      render={props => (
        <PageNotFound {...props} />
      )}
    />
  </Switch>
);

export default Index;
