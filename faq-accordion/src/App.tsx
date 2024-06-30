import { Center, Flex, MantineProvider, Paper, createTheme } from '@mantine/core';
import { MantineEmotionProvider } from '@mantine/emotion';
import '@mantine/core/styles.css';
import React from 'react';
import { colors } from './colors';
import FaqAccordion from './FaqAccordion';
import { useMediaQuery } from '@mantine/hooks';
import { getFaqs } from './api/faqApi';

const theme = createTheme({
  fontFamily: 'Work Sans',
});

function App() {
  const data = getFaqs();
  const isMobile = useMediaQuery(`(max-width: 600px)`);
  
  return (
    <MantineEmotionProvider>
      <MantineProvider theme={theme}>
        <Center 
            style={{
              minHeight: '100vh',
              backgroundColor: colors.lightPink,
              backgroundImage: isMobile ? 'url("background-pattern-mobile.png")' : 'url("background-pattern-desktop.png")',
              backgroundSize: '100vw 33vh',
              backgroundRepeat: 'no-repeat',
              padding: '28px',
            }}
          >
            <Paper w={500} radius={20} shadow='xl' styles={{root: {
              padding: isMobile ? '15px' : '30px',
            }}}>
              <Flex gap='md' align='center' style={{paddingBottom: '10px'}}>
                <img src='icon-star.svg' alt='title icon' height={isMobile ? '23px' : '30px'}/>
                <div style={{
                  fontWeight: 700,  
                  fontSize: isMobile ? '27px' : '50px'
                }}>
                  FAQs
                </div >
              </Flex>
              <FaqAccordion initialFaqs={data}/>
            </Paper>
          </Center>
      </MantineProvider>
    </MantineEmotionProvider>
  );
}

export default App;
