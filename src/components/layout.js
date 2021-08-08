import React from "react"
import MainMenu from "./MainMenu"
import styled, { createGlobalStyle } from 'styled-components'
import { device } from "./devices"


const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap');

  body, html{
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  .h1, h1 {
    font-size: 30px;
    font-family: 'Lato', sans-serif;
  }
`

const LayoutWrappper = styled.div`
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;

  @media ${device.mobileS} {
        max-width: 320px;
    }

    @media ${device.mobileM} {
        max-width: 375px;
    }

    @media ${device.mobileL} {
        max-width: 425px;
    }

    @media ${device.tablet} {
        max-width: 768px;
    }

    @media ${device.laptop} {
        max-width: 1440px;
    }

    @media ${device.desktop} { 
        max-width: 1440px ;
    }

    @media ${device.laptopL} { 
        max-width: 1440px ;
    }
`

const Layout = ({ children }) => (
<div>
  <GlobalStyles/>
  <MainMenu />
  <LayoutWrappper>
    {children}
  </LayoutWrappper>
</div>
)

export default Layout
