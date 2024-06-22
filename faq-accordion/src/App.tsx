import { Accordion, Center, MantineProvider, Paper, Title } from '@mantine/core';
import { MantineEmotionProvider } from '@mantine/emotion';
import '@mantine/core/styles.css';
import React from 'react';
import { colors } from './colors';

const data = [
  {
    q:`What is Frontend Mentor, and how will it help me?`,
    a:`Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.`,
  },
  {
    q:`Is Frontend Mentor free?`,
    a:`Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.`,
  },
  {
    q:`Can I use Frontend Mentor projects in my portfolio?`,
    a:`Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!`,
  },
  {
    q:`How can I get help if I'm stuck on a Frontend Mentor challenge?`,
    a:`The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.`,
  },
]

function App() {
  return (
    <MantineEmotionProvider>
      <MantineProvider>
        <Center 
            style={{
              minHeight: '100vh',
              backgroundColor: colors.lightPink,
              backgroundImage: 'url("background-pattern-desktop.png")',
              backgroundSize: '100vw 33%',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <Paper w={500} radius={20} shadow='xl'>
              <Title>
                FAQs
              </Title>
              <Accordion defaultValue="Apples">
                {
                  data.map((item) => {
                    return (
                      <Accordion.Item key={item.q} value={item.q}>
                        <Accordion.Control>{item.q}</Accordion.Control>
                        <Accordion.Panel>{item.a}</Accordion.Panel>
                      </Accordion.Item>
                    )
                  })
                }
              </Accordion>
            </Paper>
          </Center>
      </MantineProvider>
    </MantineEmotionProvider>
  );
}

export default App;
