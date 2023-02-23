import { makeObservable, observable, action } from 'mobx';

class LoginStore {
  rootStore;


  loginInfo ={
    "nickName" : "도함수의활용"
    ,"name" : "김진원"
    ,"profileImg" : "도함수의활용"
    ,"thumbImg" : "도함수의활용"
    ,"isLogin" : false
    ,"kakaoCode" : "도함수의활용"
    ,"kakaoAccessToken" : "도함수의활용"
    ,"kakaoRefreshToken" : "도함수의활용"

  };


  constructor(root: any) {
    makeObservable(this, {
        loginCheck: action.bound,
        loginInfo : observable
    });

    this.rootStore = root;
  }

  loginCheck() {
  }
}

export default LoginStore;
