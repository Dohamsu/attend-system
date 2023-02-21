import kakaoLoginBtn from '../images/kakaoLoginBtn.png';
import googleLoginBtn from '../images/googleLoginBtn.png';
import kakaoConnecntBtn from '../images/kakaoConnect.png';
import AlertDialog from '../components/Dialog'
import {initKakao,kakaoLogin,requestUserInfo,checkKakaoLogin} from '../components/KakaoLoginAPI'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Image from 'next/image'
import { Box, width } from '@mui/system';
import React, { Component, useEffect, useState } from 'react';
import { Button, Divider, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Switch from '@mui/material/Switch';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CampaignIcon from '@mui/icons-material/Campaign';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import LogoutIcon from '@mui/icons-material/Logout';
import LinkOffIcon from '@mui/icons-material/LinkOff';
import axios from 'axios';
import { useRouter } from 'next/router'


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

  //카카오 로그인 체크

export default function myInfo () {
    
    //kakao Init
    useEffect(() => {
        initKakao();
    }, []);
    checkKakaoLogin();
    




    const [isLogin, setLoginStatus] = useState(false);
    const [checked, setChecked] = React.useState(['wifi']);
    const [open, setOpen] = React.useState(false);

    const checkLogin = () =>{
        setLoginStatus(true);
        console.log(isLogin);
    }

    const handleToggle = (value: string) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
  
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
  
      setChecked(newChecked);
    };
  

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
       
                        <Box sx={{paddingTop:'10px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignContent: 'space-around',
                                    justifyContent: 'center',
                                    alignItems: 'center'}}>
                            <Box sx={{ display: 'flex'}}>
                                <Image src={kakaoConnecntBtn} alt="카카오 연결" width={30} height={30}/>
                                <Typography variant="h6" component="h6" sx={{paddingLeft:'10px'}}>
                                도함수의활용
                                </Typography>
                            </Box>
                            <Box >
                                <Typography variant="h6" component="h6" sx={{paddingLeft:'10px'}}>
                                19기 연주단 세컨 3 
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12}  sx={{textAlign:"-webkit-center"}} >
               
                    <List
                        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                        // subheader={<ListSubheader>설정</ListSubheader>}
                        >
                        <ListItem>
                            <ListItemIcon>
                            <NotificationsIcon />
                            </ListItemIcon>
                            <ListItemText id="switch-list-label-wifi" primary="출석체크 가능알림" />
                            <Switch
                            edge="end"
                            onChange={handleToggle('wifi')}
                            checked={checked.indexOf('wifi') !== -1}
                            inputProps={{
                                'aria-labelledby': 'switch-list-label-wifi',
                            }}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                            <CampaignIcon />
                            </ListItemIcon>
                            <ListItemText id="switch-list-label-bluetooth" primary="공지알림 수신" />
                            <Switch
                            edge="end"
                            onChange={handleToggle('bluetooth')}
                            checked={checked.indexOf('bluetooth') !== -1}
                            inputProps={{
                                'aria-labelledby': 'switch-list-label-bluetooth',
                            }}
                            />
                        </ListItem>
                    </List>

                    <Divider light />

                    </Grid>
                    <Grid item xs={12} sx={{paddingTop:'0px !important',textAlign:"-webkit-center"}}>
                    <List
                        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                        >
                        <ListItem>
                            <ListItemIcon> <PersonIcon /></ListItemIcon>
                            <ListItemText id="switch-list-label-wifi" primary="닉네임 설정" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><ContactPhoneIcon /></ListItemIcon>
                            <ListItemText id="switch-list-label-bluetooth" primary="연락처 수정" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><GroupIcon /></ListItemIcon>
                            <ListItemText id="switch-list-label-bluetooth" primary="소속 수정" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><LinkOffIcon /></ListItemIcon>
                            <ListItemText id="switch-list-label-bluetooth" primary="소셜 로그인 연동 해제" />
                        </ListItem>
                        <ListItem
                            onClick={function(){setOpen(true)}}
                        >
                            <ListItemIcon><LogoutIcon /></ListItemIcon>
                            <ListItemText id="switch-list-label-bluetooth" primary="로그아웃" />
                        </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12}>
                    </Grid>
                </Grid> 
                <AlertDialog open={open} dialogCloseCallback={function(){setOpen(false); setLoginStatus(false);}}/>
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
                        <Item onClick={requestUserInfo}>로그인 하기</Item>
                        <Item onClick={requestUserInfo} sx={{color:'white',backgroundColor:'black', marginTop:'30px'}}>회원가입</Item>
                    </Grid>
                    <Grid item xs={12} onClick={kakaoLogin}>
                        <KakaoImage ></KakaoImage>
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