import React, { useContext } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import { observer } from 'mobx-react-lite';
import SharedStore from '../store/SharedStore';
import LogInPage from '../components/LogInPage';
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';

const App: React.FC = () => {

  const sharedStore = useContext(SharedStore);
  const { loggedIn, loading } = sharedStore;

  if (loggedIn && !loading) {
    return (
      <>
        <Navbar />
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </>
    );
  } else if (loading) {
    return <Loading />
  } else {
    return <LogInPage />
  }
}

export default observer(App);

