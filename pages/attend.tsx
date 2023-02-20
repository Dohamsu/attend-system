import kakaoLoginBtn from '../images/kakaoLoginBtn.png';
import googleLoginBtn from '../images/googleLoginBtn.png';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Image from 'next/image'
import { Box, width } from '@mui/system';
import React, { Component, useState } from 'react';
import { Button, Divider, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Calendar from '../components/CustomCalendar';
let isLogin = true;

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
    const [isLogin, setLoginStatus] = useState(true);
    
    const checkLogin = () =>{
        setLoginStatus(true);
        console.log(isLogin);
    }

    if (isLogin) {
        return <Box> 
               <Grid container  spacing={4}
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                marginTop="40px"
                >
                    <Grid item xs={12} >
                        <Avatar sx={{display:'-webkit-inline-box'}} alt="Dohamsu" src="/static/images/avatar/1.jpg" />
                        <Box sx={{paddingTop:'10px'}}>도함수의활용</Box>
                    </Grid>
                    <Grid item xs={12}  sx={{textAlign:"-webkit-center"}} >
                        <Box sx={{ 
                        display: 'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        border:'1px solid black',
                        color:'white',
                        backgroundColor:'black',
                        borderRadius:'5px',
                        width:'300px',
                        fontSize:'1.25rem',
                        height:'90px'}}>
                            <Box>
                                <Box
                                sx={{display:'flex'}}> 
                                오늘 출석
                                </Box>
                                <Box sx={{color:'green', fontWeight:'bold'}}> 
                                    O
                                </Box>
                            </Box>
                            <Box 
                            sx={{width:'2px',height:'70%',backgroundColor:'white', margin:'0 27px 0 27px'}}>
                            </Box>
                            <Box>
                                <Box
                                sx={{display:'flex'}}> 
                                한달 출석
                                </Box>
                                <Box sx={{color:'green', fontWeight:'bold'}}> 
                                    23
                                </Box>
                            </Box>
                        </Box>
                     
                    </Grid>
                    <Grid item xs={12}>
                        <Calendar></Calendar>
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