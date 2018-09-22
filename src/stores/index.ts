import { observable } from "mobx";


class ApplicationState {
    @observable isLoggedIn:boolean = false;
}


export default new ApplicationState();