import kakaoLoginBtn from '../images/kakaoLoginBtn.png';
import googleLoginBtn from '../images/googleLoginBtn.png';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Image from 'next/image'
import { Box, width } from '@mui/system';
import React, { Component, useState } from 'react';
import { Button, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';

let isLogin = false;

//grid css설정
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width:'183px',
    height:'45px',
  }));

  //입력창 css설정
  const TextInput = styled(TextField)(({  }) => ({
    textAlign: 'center',
    width:'250px',
    margin:'10px'
  }));

export default function myInfo () {
    const [isLogin, setLoginStatus] = useState(false);
    
    const checkLogin = () =>{
        setLoginStatus(true);
        console.log(isLogin);
    }

    if (isLogin) {
        return <Box> 
               <Grid container  spacing={4}
                justifyContent="center"
                alignItems="center"
                marginTop="40px"
                direction="column"
                >
                    <Grid item xs={12}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    
                        <Box
                            sx={{
                                p: 4,
                                bgcolor: 'background.default',
                                display: 'grid',
                                gridTemplateColumns: { md: '1fr 1fr' },
                                gap: 2,
                            }}
                            >
                            <Item elevation={3}>
                                오늘 출석
                                <Box sx={{color:'red'}}> 
                                    3
                                </Box>
                            </Item>
                            <Item elevation={3}>
                                한달 누적출석
                                <Box sx={{color:'red'}}> 
                                    3
                                </Box>
                            </Item>


                            </Box>

                    </Grid>
                    <Grid item xs={12}>
                     
                    </Grid>
                    <Grid item xs={12}>
                    </Grid>
                    <Grid item xs={12}>
                    </Grid>
                </Grid> 
            


    
               

        </Box>;
      }
      else{
        return <Box
            sx={{ textAlign:'center', alignContent:'center',padding:'20px'}}
            >
                <Typography variant="h4" component="h4">
                로그인
                </Typography>
                <Grid container  spacing={4}
                justifyContent="center"
                alignItems="center"
                marginTop="40px"
                direction="column"
                >
                    <Grid item xs={12}>
                        <TextInput  label="아이디" variant="outlined" />
                        <TextInput type="password"  label="비밀번호" variant="outlined" />

                    </Grid>
                    <Grid item xs={12}>
                        <Item onClick={checkLogin}>로그인 하기</Item>
                        <Item sx={{color:'white',backgroundColor:'black', marginTop:'30px'}}>회원가입</Item>
                    </Grid>
                    <Grid item xs={12}>
                        <KakaoImage></KakaoImage>
                    </Grid>
                    <Grid item xs={12}>
                        <GoogleImage></GoogleImage>
                    </Grid>
                </Grid>         
            </Box>;

      }
}

function KakaoImage(){
    return  <Image src={kakaoLoginBtn} alt={'kakaoLogin'} width={183} height={45} />
}

function GoogleImage(){
    return  <Image src={googleLoginBtn} alt={'googleLoginBtn'} width={183} height={45} />
}