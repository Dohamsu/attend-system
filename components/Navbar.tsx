import React, { Component } from "react";
import Box from '@mui/material/Box';
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Home,AssignmentTurnedIn,AccountCircle,LocationOn,Face } from '@mui/icons-material';
import {useRouter} from 'next/router';

export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);
    const router = useRouter();

    return (
      <Box sx={{ width:'100%',bottom:0,position:'fixed',backgroundColor: "white",}}>
        <BottomNavigation
          // showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{height:"9vh"
          ,backgroundColor: "white"
        }}
        >
          <BottomNavigationAction onClick={()=>router.push('/main')} label="메인" icon={<Home sx={{ fontSize: 40 }}/>} />
          <BottomNavigationAction onClick={()=>router.push('/attend')}label="출석체크" icon={<AssignmentTurnedIn sx={{ fontSize: 40 }}/>}/>
          <BottomNavigationAction onClick={()=>router.push('/myInfo')}label="내정보" icon={<AccountCircle sx={{ fontSize: 40 }}/>} />
        </BottomNavigation>
      </Box>
    );
  }