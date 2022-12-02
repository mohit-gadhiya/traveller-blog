import { Box, Button, FormLabel, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { sendAuthRequest } from '../../api-helper/ApiHelper'
import { authActions } from '../../store'

const Auth = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isSignup, setisSignup] = useState(false)
  const [inputs, setInputs] = useState({ name: '', email: '', password: '' })

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  const onResRecieved = (data) => {
    if(isSignup){
      localStorage.setItem("userId", data.user._id)
    }else{
      localStorage.setItem("userId", data.id)
    }
    dispatch(authActions.login())
    navigate('/diaries')
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputs)

    if (isSignup) {
      sendAuthRequest(true, inputs)
        .then((data) => onResRecieved(data))
        .catch((err) => console.log(err))
    } else {
      sendAuthRequest(false, inputs)
        .then((data) => onResRecieved(data))
        .catch((err) => console.log(err))
    }
  }

  return (
    <Box
      width={'40%'}
      borderRadius={10}
      boxShadow={"5px 5px 10px #ccc"}
      margin={'auto'}
      marginTop={10}
    >
      <form onSubmit={handleSubmit}>
        <Box
          display={'flex'}
          flexDirection='column'
          width={'60%'}
          padding={5}
          margin='auto'
        >
          <Typography variant='h4' padding={1} textAlign={'center'}>
            {isSignup ? 'Signup' : 'Login'}
          </Typography>
          {isSignup &&
            <>
              <FormLabel>Name</FormLabel>
              <TextField
                onChange={handleChange}
                margin='normal'
                name='name'
                required
                value={inputs.name}
              />
            </>
          }
          <FormLabel>Email</FormLabel>
          <TextField
            onChange={handleChange}
            margin='normal'
            name='email'
            type='email'
            required
            value={inputs.email}
          />
          <FormLabel>Password</FormLabel>
          <TextField
            onChange={handleChange}
            margin='normal'
            name='password'
            type={'password'}
            required
            value={inputs.password}
          />
          <Button sx={{ mt: 2, borderRadius: 10 }} type='submit' variant='contained'>
            {isSignup ? 'Signup' : 'Login'}
          </Button>
          <Button onClick={() => setisSignup(!isSignup)} sx={{ mt: 2, borderRadius: 10 }} variant='outlined'>
            Change to {isSignup ? 'Login' : "Signup"}
          </Button>
        </Box>
      </form>
    </Box>
  )
}

export default Auth