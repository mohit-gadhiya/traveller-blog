import React, { useState } from 'react'
import { Alert, Avatar, Card, CardActions, CardContent, CardHeader, IconButton, Snackbar, Typography } from '@mui/material'
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { deletePost } from '../../api-helper/ApiHelper';

const DiaryItem = ({ title, location, description, date, id, image, user, name }) => {

    const [open, setOpen] = useState(false)
    const isLoggedInUser = () => {
        if (localStorage.getItem("userId") === user) {
            return true
        }
        return false
    }
    const handleDelete = () => {
        deletePost(id)
            .then((data) => console.log(data))
            .catch((err) => console.log(err))
        setOpen(true)
    }

    return (
        <Card
            sx={{
                width: '50%',
                height: 'auto',
                margin: 1,
                padding: 1,
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '5px 5px 10px #ccc',
                borderRadius: 1
            }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: 'red', textTransform: 'uppercase' }} aria-label="recipe">
                        {name?.charAt(0)}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <EditLocationAltIcon />
                    </IconButton>
                }
                title={location}
                subheader={date}
            />
            <img src={image} height="350" alt={title} />
            <CardContent>
                <Typography variant="h6" color="text.secondary" paddingBottom={1} sx={{ textTransform: 'capitalize' }}>
                    {title}
                </Typography>
                <hr />
                <Box display={'flex'} paddingTop={1}>
                    <Typography width={'170px'} fontWeight={'bold'} variant='caption' textTransform={'capitalize'}>{name}:</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ textTransform: 'titlecase' }}>
                        {description}
                    </Typography>
                </Box>
            </CardContent>
            {isLoggedInUser() &&
                <CardActions sx={{ marginLeft: 'auto' }}>
                    <IconButton LinkComponent={Link} to={`/post/${id}`} color='warning'><EditIcon /></IconButton>
                    <IconButton onClick={handleDelete} color='error'><DeleteForeverIcon /></IconButton>
                </CardActions>
            }
            <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
                <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%' }}>
                    This is a success message!
                </Alert>
            </Snackbar>
        </Card>
    )
}

export default DiaryItem