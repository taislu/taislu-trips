import React, {useState, useEffect} from "react";
import { ThemeProvider } from "styled-components";
import { Flex, Box, Image, Text, Link } from "rebass";
import posed from "react-pose";

import "../style/reset.css";

import Logo from "./profile-pic.jpg";
import Footer from "./footer"

import { useSpring, animated } from 'react-spring'

const theme = {
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    sans: 'Montserrat, sans-serif',
    body: 'Montserrat, sans-serif',
    heading: 'Montserrat',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48],
  colors: {
    grey: "#999",
    black: "#1a1a1a",
    red: "#e61428",
    blue: '#07c',
    lightgray: '#f6f6ff'
  }
};

const FadingHeader = posed.header({
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
  entering: { opacity: 1 },
  entered: { opacity: 1 }
});

const Layout = ({ children, transitionStatus }) => {
    const [visible, setVisible] = useState(false)
    useEffect(()=>{
        setVisible(true)
    },[])
    // use [] to tell react to run effect only once 

    const fadeIn = useSpring({
        opacity: visible? "1" : "0",
        marginTop: visible? "0px" : "3000px",
    })

    return (
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <animated.div style={fadeIn}>
                    <FadingHeader pose={transitionStatus}>
                        <Flex px={[3, 5]} py={4} >
                        <Box >
                            <Link href='https://twitter.com/taislu' >
                            <Image src={Logo} 
                                    sx={{
                                    width: 65,
                                    height: 65,
                                    borderRadius: 65,
                                    }}
                            /> 
                            </Link>
                        </Box>
                        <Box px={3} py={2} fontSize={[ 1, 2, 3 ]} >
                            <Text 
                            fontFamily='Montserrat, sans-serif'
                            color='tomato'>
                            Trips Photos
                            </Text>     
                            <Link  href='/' >[HOME]</Link>
                        </Box>
                        </Flex>
                    </FadingHeader>
                </animated.div>  
                <Box as="main" px={[3, 5]}>
                    {children}
                </Box>
                <Box py={4}>
                    <Footer />
                </Box>
            
            </React.Fragment>
        </ThemeProvider>
    );
}

export default Layout;
