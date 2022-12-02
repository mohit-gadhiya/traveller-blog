import { Box, Button, FormLabel, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { addPost } from '../../api-helper/ApiHelper';
import { useNavigate } from 'react-router-dom';

const Add = () => {

  const navigate = useNavigate()
  const [inputs, setInputs] = useState({ title: '', description: '', imageUrl: '', location: '', date: '' })

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  const onResRecieved = (data) => {
    console.log(data)
    navigate('/diaries')
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    addPost(inputs)
      .then((res) => onResRecieved(res))
      .catch((err) => console.log(err))
  }
  return (
    <Box
      display={'flex'}
      flexDirection='column'
      width={'100%'}
      height='100%'
    >
      <Box
        display={'flex'}
        margin='auto'
        padding={2}
      >
        <Typography
          variant='h4'
          fontFamily={'dancing script'}
          fontWeight='bold'
        >
          Add Your Travel Diary
        </Typography>
        <TravelExploreIcon sx={{ fontSize: '40px', marginLeft: 1, color: 'lightcoral' }} />
      </Box>
      <form onSubmit={handleSubmit}>
        <Box
          padding={3}
          display='flex'
          flexDirection={'column'}
          margin={'auto'}
          width='80%'
        >
          <FormLabel sx={{ fontFamily: 'quicksand' }} >Title</FormLabel>
          <TextField
            name='title'
            value={inputs.title}
            onChange={handleChange}
            required
            variant='standard'
            margin='normal'
          />
          <FormLabel sx={{ fontFamily: 'quicksand' }} >Description</FormLabel>
          <TextField
            name='description'
            value={inputs.description}
            onChange={handleChange}
            required
            variant='standard'
            margin='normal'
          />
          <FormLabel sx={{ fontFamily: 'quicksand' }} >Image URL</FormLabel>
          <TextField
            name='imageUrl'
            value={inputs.imageUrl}
            onChange={handleChange}
            required
            variant='standard'
            margin='normal'
          />
          <FormLabel sx={{ fontFamily: 'quicksand' }} >Location</FormLabel>
          <TextField
            name='location'
            value={inputs.location}
            onChange={handleChange}
            required
            variant='standard'
            margin='normal'
          />
          <FormLabel sx={{ fontFamily: 'quicksand' }} >Date</FormLabel>
          <TextField
            name='date'
            value={inputs.date}
            onChange={handleChange}
            type='date'
            required
            variant='standard'
            margin='normal'
          />
          <Button type='submit' variant='contained' color='warning' sx={{ width: '50%', borderRadius: 7, margin: 'auto', marginTop: 3 }} >Post</Button>
        </Box>
      </form>
    </Box>
  )
}

export default Add