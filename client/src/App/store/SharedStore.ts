import { action, configure, observable, runInAction } from 'mobx';
import { createContext } from 'react';

configure({enforceActions: "always"})

export class SharedStore {
    @observable loggedIn = false;

    @action changeLoggedIn = () => {
        runInAction("change log in ", () => {
            this.loggedIn = !this.loggedIn;
        })
    }
}

export default createContext(new SharedStore());
