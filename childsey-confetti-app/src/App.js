import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Grid,
  theme,
} from '@chakra-ui/react';
import './App.css'
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Confetti from 'react-confetti'

function App() {

  return (
    <ChakraProvider theme={theme}>
      <Confetti 
        id='confetti-wrapper'
        drawShape={ctx => {
          ctx.beginPath()
          for(let i = 10; i < 15; i++) {
            const angle = 0.35 * i
            const x = (5.0 + (2.0 * angle)) * Math.cos(angle)
            const y = (5.0 + (2.0 * angle)) * Math.sin(angle)
            ctx.lineTo(x, y)
          }
          ctx.stroke()
          ctx.closePath()
        }}
      />
      <Confetti 
        id='confetti-wrapper'
        drawShape={ctx => {
          ctx.beginPath()
          for(let i = 10; i < 15; i++) {
            const angle = 0.35 * i
            const x = (5.0 + (2.0 * angle)) * Math.cos(angle)
            const y = (5.0 + (2.0 * angle)) * Math.sin(angle)
            ctx.lineTo(x, y)
          }
          ctx.stroke()
          ctx.closePath()
        }}
      />
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
              <div id='text-wrapper'>
                <Text id='text-one'>
                A couple of years ago Childsey was founded.
                </Text>
                <Text id='text-two'>
                Time flies when you are having fun - it also whizzes by when you love what you do and the clients you work with. A huge thanks to those who have supported us so far!
                </Text>
                <Text id='text-three'>
                Let's see what the rest of 2022 has in store as we step into our third year...
                </Text>
              </div>
            <Link
              color="#FF4201"
              href="https://www.Childsey.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Childsey
            </Link>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
