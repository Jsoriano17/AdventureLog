import { action, configure, observable, runInAction } from 'mobx';
import { createContext } from 'react';
import agent from '../api/agent';
import { history } from '../..';
import { IMessage } from '../models/message';

configure({enforceActions: "always"})

export class SharedStore {
    @observable loggedIn = false;
    @observable loading = false;

    @action loginToApp = (username: string, password: string) => {
        if (username === 'TobiBobi' && password === '092319' ) {
            runInAction("change log in ", () => {
                setTimeout(() => {
                    runInAction("changing loading", () => {
                        this.loading = !this.loading;
                    })
                }, 3000);
                this.loading = !this.loading
                this.loggedIn = !this.loggedIn;
            })
        } else {
            runInAction("change log in", () => {
                this.loggedIn = false;
            })
            alert("Leave Now.");
        }
    }

  @action createMessage = async (message: IMessage) => {
    try {
      await agent.Messages.create(message);
      runInAction('create message', () => {
      })
      history.push('/');
    } catch (error) {
      runInAction('create message error', () => {
        console.log(error);
      })
      console.log(error);
    }
  };

}

export default createContext(new SharedStore());
