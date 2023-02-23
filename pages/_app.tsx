import App from "next/app";
import React from "react";

import { StoreProvider } from '../stores/Context';
import RootStore from '../stores/RootStore';
import NavBar from '../components/Navbar'
import CssBaseline from "@mui/material/CssBaseline";
import Container from '@mui/material/Container';



declare global{
  interface Window{
    Cypress:unknown;
    Kakao:any;
    Location:any;
  }
}


export default class MainContainer extends App < {}> {
  
  
  render() {
    const { Component, pageProps } = this.props;
    const rootStore = new RootStore();
    
    return (
      <Container  sx={{height:"100vh" ,width:"100%", margin: "auto", p:1}}>
        <StoreProvider value={rootStore}>
          <CssBaseline />
          <div style={{ height:"99vh"}}>
              <Component {...pageProps}/>
          </div>
          <NavBar/>
        </StoreProvider>
      </Container>

    );
  }
}