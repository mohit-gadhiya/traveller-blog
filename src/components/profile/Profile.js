import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUserDetails } from '../../api-helper/ApiHelper'
import { authActions } from '../../store'
import DiaryItem from '../diaries/DiaryItem'

const Profile = () => {

  const navigate = useNavigate()
  const [user, setUser] = useState()
  const dispatch = useDispatch()

  const onResRecieved = (data) => {
    setUser(data.user)
  }

  useEffect(() => {
    getUserDetails()
      .then((data) => onResRecieved(data))
      .catch((err) => console.log(err))
  }, [])

  const handleLogout = () => {
    dispatch(authActions.logout())
    localStorage.removeItem("userId")
    navigate('/')
  }

  return (
    <Box
      display={'flex'}
      flexDirection='column'
    >
      {user && <>
        <Typography
          textAlign={'center'}
          variant='h3'
          fontFamily={'quicksand'}
          padding={2}
        >
          User Profile
        </Typography>
        <Typography fontFamily={'quicksand'} textAlign='left' padding={1}>Name: {user?.name}</Typography>
        <Typography fontFamily={'quicksand'} textAlign='left' padding={1}>Email: {user?.email}</Typography>
        <Button onClick={handleLogout} sx={{ mr: 'auto', width: '15%'}} color='warning' variant='contained'>Logout</Button>
        <Box display={'flex'} flexDirection='column' justifyContent={'center'} alignItems='center'>
          {user.posts.map((post, index) =>
            <DiaryItem
              key={index}
              title={post.title}
              date={new Date(`${post.date}`).toLocaleDateString()}
              location={post.location}
              description={post.description}
              id={post.id}
              image={post.image}
              user={user._id}
              name={user?.name}
            />)}
        </Box>
      </>}
    </Box>
  )
}

export default Profile