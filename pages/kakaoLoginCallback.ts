import React, { Component, useEffect } from "react";
import {useRouter} from 'next/router';
import { initKakao } from "@/components/KakaoLoginAPI";
import { useStore } from "@/stores/Context";
import axios from "axios";


export default function kakaoLoginCallback() {

    const router = useRouter();
    useEffect(()=>{
        initKakao();

    
        let isLogin = true;
        let headers   = {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Accept': '*/*'
        }
        const { loginStore } = useStore();
        const { loginInfo }  = loginStore;
        const router         = useRouter();
        const kakaoCode      = router.query.code;
        //토큰 검사
        function requestKakaoToken(callback:any) {
            //코드 기반 토큰 요청
            if(kakaoCode){
            axios.post('https://kauth.kakao.com/oauth/token', {
                grant_type : 'authorization_code',
                client_id : "5321f78ebcacf271f4e9e6f32713cce6",
                code: kakaoCode,
                //   redirect_uri : 'http://localhost:3000/kakaoCallback'
                }, {headers})
                .then(function (response) {
                console.log(response);
                let accessToken = response.data.access_token;
                let refreshToken = response.data.refresh_token;
                sessionStorage.setItem("kakaoAccessToken",accessToken);
                sessionStorage.setItem("kakaoRefreshToken",refreshToken);

                // 토큰 기반 로그인 정보 요청
                requestKakaoInfo();
        
                }).catch(function (error) {
                console.log(error);
                alert("카카오 로그인 실패 사유 : 서버 통신 실패");

                sessionStorage.setItem("kakaoAccessToken","");
                sessionStorage.setItem("kakaoRefreshToken","");
                });
            }else{
                console.log("url 코드 없음 session Storage 검사");

                //@TODO 세션 스토리지 검사 후 다시 요청
                
                alert("카카오 로그인 실패 재로그인하세요");
            }
            if(isLogin){
                router.push('/myInfo');
            }
        }


        function requestKakaoInfo(){
            let acToken  = sessionStorage.getItem("kakaoAccessToken");
            let authHeader = { 'Authorization': 'Bearer '+acToken,};
            headers = {...authHeader,...headers}

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
                  console.log(loginInfo);

                  //@TODO myinfo로 리다이렉트 

                })
                .catch(function (error) {
                  console.log(error);
                  sessionStorage.setItem("kakaoAccessToken","");
                  sessionStorage.setItem("kakaoRefreshToken","");    
                  console.log("토큰 만료 재시도");        
                });
          
              }else{
    
              }
        }


    });

}
