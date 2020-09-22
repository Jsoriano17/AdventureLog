import React, { useContext } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import { observer } from 'mobx-react-lite';
import SharedStore from '../store/SharedStore';
import LogInPage from '../components/LogInPage';
import Loading from '../components/Loading';
import MessageForm from '../components/Forms/MessageForm';
import NotFound from '../components/NotFound';

const App: React.FC = () => {

  const sharedStore = useContext(SharedStore);
  const { loggedIn, loading } = sharedStore;

  if (loggedIn && !loading) {
    return (
      <>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/create-message' component={MessageForm} />
          <Route component={NotFound} />
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

