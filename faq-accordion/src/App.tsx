import { Center, Flex, MantineProvider, Paper, Text, Title, createTheme } from '@mantine/core';
import { MantineEmotionProvider } from '@mantine/emotion';
import '@mantine/core/styles.css';
import React from 'react';
import { colors } from './colors';
import FaqAccordion from './FaqAccordion';
import { Faq } from './modals/Faq';
import { useMediaQuery } from '@mantine/hooks';

const data: Faq[] = [
  {
    question:`What is Frontend Mentor, and how will it help me?`,
    answer:`Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.`, 
  },
  {
    question:`Is Frontend Mentor free?`,
    answer:`Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.`,
  },
  {
    question:`Can I use Frontend Mentor projects in my portfolio?`,
    answer:`Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!`,
  },
  {
    question:`How can I get help if I'm stuck on a Frontend Mentor challenge?`,
    answer:`The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.`,
  },
];

const theme = createTheme({
  fontFamily: 'Work Sans',
});

function App() {
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
