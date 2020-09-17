import React, { useContext, useState } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import { observer } from 'mobx-react-lite';
import SharedStore from '../store/SharedStore';
import LogInPage from '../components/LogInPage';
import Navbar from '../components/Navbar';

const App: React.FC = () => {

  const sharedStore = useContext(SharedStore);
  const { loggedIn } = sharedStore;

    if (loggedIn) {
      return (
        <>
          <Navbar/>
          <Switch>
            <Route path='/' component={Home} />
          </Switch>
        </>
      );
    } else {
      return <LogInPage />
    }
  }

    export default observer(App);

