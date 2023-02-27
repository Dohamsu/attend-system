import  React ,{useEffect, useState}from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'
import { useStore } from '../stores/Context';



const initKakao = () => {
  const jsKey = '2d835dd311c1550294a254a27df6be55';
  const Kakao = window.Kakao;
  if (Kakao && !Kakao.isInitialized()) {
    Kakao.init(jsKey);
  }
};

const kakaoLogin = () => {
  const Kakao = window.Kakao;
  Kakao.Auth.authorize({prompts: 'login' ,redirectUri : 'http://localhost:3000/myInfo'});
  
};

function requestUserInfo() {
}

//토큰 검사
function checkKakaoLogin(callback:any) {

  const { loginStore } = useStore();
  const { loginInfo }  = loginStore;    
  const router         = useRouter();

    let headers = {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Accept': '*/*'
      }
    useEffect(() => {
      let acToken  = sessionStorage.getItem("kakaoAccessToken");
      
        let authHeader = { 'Authorization': 'Bearer '+acToken,};
        headers ={...authHeader,...headers}
          if(acToken){
            console.log("토큰있음");
      
            axios.post('https://kapi.kakao.com/v2/user/me', {
            }, {headers})
            .then(function (response:any) {
              console.log(response);
              let data = response.data.kakao_account.profile;
              let nickName = data.nickname;
              let profileImg = data.profile_image_url;
              let thumbImg = data.thumbnail_image_url;

              loginInfo.nickName = nickName;
              loginInfo.profileImg = profileImg;
              loginInfo.thumbImg = thumbImg;
              loginInfo.nickName = nickName;
              loginInfo.isLogin = true;
              callback(true);
              console.log(loginInfo);
            })
            .catch(function (error) {
              console.log(error);
              sessionStorage.setItem("kakaoAccessToken","");
              sessionStorage.setItem("kakaoRefreshToken","");    
              console.log("토큰 만료 재시도");        
            });
      
          }else{
            callback(false);

          }
    
    }, [])



    function requestToken(){
      let refreshToken     = "";
      const headers   = {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Accept': '*/*'
      }
      
      if(refreshToken){
        
        axios.post('https://kauth.kakao.com/oauth/token', {
            grant_type : 'authorization_code',
            client_id : "5321f78ebcacf271f4e9e6f32713cce6",
            code: refreshToken,
            redirect_uri : 'http://localhost:3000/myInfo'
          }, {headers})
          .then(function (response) {
            console.log(response);
            let accessToken = response.data.access_token;
            let refreshToken = response.data.refresh_token;
            sessionStorage.setItem("kakaoAccessToken",accessToken);
            sessionStorage.setItem("kakaoRefreshToken",refreshToken);
    
          })
          .catch(function (error) {
            console.log(error);
    
            sessionStorage.setItem("kakaoAccessToken","");
            sessionStorage.setItem("kakaoRefreshToken","");
          });
    }else{
      console.log("url 코드 없음 코드 요청 ");
      kakaoLogin();
    }
    
    }
}


export  {initKakao,kakaoLogin,requestUserInfo,checkKakaoLogin}