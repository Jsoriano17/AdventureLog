import {observable, action, runInAction, configure} from 'mobx';
import { createContext, SyntheticEvent } from 'react';

configure({enforceActions: "always"})

export class SharedStore {
    @observable loggedIn = false; 
}

export default createContext(new SharedStore())