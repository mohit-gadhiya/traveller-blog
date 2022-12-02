import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <Box position={'relative'} width='100%' height='90vh'>
      <img src='../road.jpg' alt='road' height="70%" width='100%' />
      <Typography 
        fontFamily={"Dancing Script, cursive"}
        fontWeight='bold'
        variant='h3' 
        width={'100%'}
        sx={{ position: 'absolute', top: '0px', textAlign: 'center', color: '#111115de', background: '#B2C8Df' }}
      >
        Dare to live the life you've always wanted 
      </Typography>
      <Box
        width={'100%'}
        height='30%'
        display={'flex'}
        flexDirection="column"
      >
        <Typography
          textAlign={'center'}
          variant='h4'
          padding={4}
          fontFamily={"Quicksand"}
        >
          SHARE YOUR TRAVEL DIARIES WITH US
        </Typography>
        <Box margin={'auto'}>
          <Button variant='outlined' sx={{ mr: 2}}>
            Share your story
          </Button>
          <Button variant='contained' sx={{ ml: 2}}> View Diaries</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Home