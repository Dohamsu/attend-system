import kakaoLoginBtn from '../images/kakaoLoginBtn.png';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import Image from 'next/image'
import { Box } from '@mui/system';
import React from 'react';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


export default function myInfo () {
    return <Box
        sx={{ textAlign:'center', alignContent:'center'}}
        >
            <Typography variant="h3" component="h3">
               로그인
            </Typography>
            <Grid container spacing={2} xs={12} 
             justifyContent="center"
             alignItems="center"
            >
                <Grid item xs={8} md={8}>
                    <TextField id="outlined-basic" label="아이디" variant="outlined" />
                    <TextField id="outlined-basic" label="비밀번호" variant="outlined" />
                </Grid>
                <Grid item xs={8} md={8}>
                    <Item>구글 로그인</Item>
                </Grid>
                <Grid item xs={8} md={8}>
                    <Item>카카오 로그인</Item>
                </Grid>
                <Grid item xs={8} md={8}>
                    <Item>네이버 로그인</Item>
                </Grid>
            </Grid>

        <Box
        sx={{
            fontSize:'2rem',
            margin:'20px'
        }}
        >
             

             
             <TextField id="outlined-basic" label="아이디" variant="outlined" />
             <TextField id="outlined-basic" label="비밀번호" variant="outlined" />

        </Box>
        

         
         <Box
            sx={{display:'inline-block'}}
            >
            <KakaoImage></KakaoImage>

         </Box>
         
         
        </Box>


}




function KakaoImage(){


    return  <Image src={kakaoLoginBtn} alt={'kakaoLogin'} width={200} height={50} />

}

