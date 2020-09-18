import { action, configure, observable, runInAction } from 'mobx';
import { createContext } from 'react';
import { createFalse } from 'typescript';

configure({enforceActions: "always"})

export class SharedStore {
    @observable loggedIn = false;

    @action loginToApp = (username: string, password: string) => {
        if (username === 'TobiBobi' && password === '092319' ) {
            runInAction("change log in ", () => {
                this.loggedIn = !this.loggedIn;
            })
        } else {
            runInAction("change log in ", () => {
                this.loggedIn = false;
            })
            alert("Leave Now.");
        }
    }
}

export default createContext(new SharedStore());
