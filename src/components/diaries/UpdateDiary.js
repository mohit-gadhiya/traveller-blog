import { Box, Button, FormLabel, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPostDetails, updatePost } from '../../api-helper/ApiHelper';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

const UpdateDiary = () => {
  const id = useParams().id
  const [post, setPost] = useState()
  const [inputs, setInputs] = useState({ title: '', description: '', imageUrl: '', location: '' })

  useEffect(() => {
    getPostDetails(id)
      .then((data) => {
        setInputs({
          title: data.post.title,
          description: data.post.description,
          imageUrl: data.post.image,
          location: data.post.location
        })
        setPost(data.post)
      })
      .catch((err) => console.log(err))
  }, [id])

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputs);
    updatePost(inputs, id)
      .then((data) => console.log(data))
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
          Update Your Travel Diary
        </Typography>
        <TravelExploreIcon sx={{ fontSize: '40px', marginLeft: 1, color: 'lightcoral' }} />
      </Box>
      {post &&
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
            <Button type='submit' variant='contained' color='warning' sx={{ width: '50%', borderRadius: 7, margin: 'auto', marginTop: 3 }} >Post</Button>
          </Box>
        </form>
      }
    </Box>
  )
}

export default UpdateDiary