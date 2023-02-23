import { makeObservable, observable, action } from 'mobx';

class GlobalStore {
  rootStore;


  constructor(root: any) {
    makeObservable(this, {
      handleMobileOpen: action.bound,
    });

    this.rootStore = root;
  }

  handleMobileOpen() {
  }
}

export default GlobalStore;
