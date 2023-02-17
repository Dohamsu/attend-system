import React, { Component } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function main () {
    return <div> 

    <MainNotice></MainNotice>


    </div>

}



function MainNotice(){
    return <Box
        sx={{
            textAlign:'center'
        }}
    >
       <Typography variant="h3" component="h3">
        공지사항
        </Typography>
        <li> 베이스 세팅 완료 </li>

        
    </Box>
}