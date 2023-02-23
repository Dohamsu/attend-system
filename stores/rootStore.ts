import GlobalStore from './GlobalStore';
import LoginStore from './LoginStore';

export default class RootStore {
  globalStore;

  loginStore;

  constructor() {
    this.globalStore = new GlobalStore(this);
    this.loginStore = new LoginStore(this);
  }
}
