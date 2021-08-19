import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import AddIcon from '@material-ui/icons/Add';
import {Grid} from '@material-ui/core';

const useStyles = makeStyles({
    main: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        top:'10%',
        left:'10%',
    },
    text: {
        width: '50%',
    },
    button: {
        marginTop:'20px',
        width: '5%',
    }
})

export default function AddTodo({addtodo}) {

    const [todo, settodo] = useState()

    const classes = useStyles()

    const handleClick = () => {
        addtodo(todo)
    }

    return (
        <div className={classes.main}>
            <Typography variant="h4" color="primary" gutterBottom>
                Create Todo
            </Typography>

            <br />

            <TextField className={classes.text} onChange={(e) => settodo(e.target.value)} variant="outlined" />
            <br />

            <Button variant="contained" color="primary" className={classes.button} onClick={handleClick}>
              Add Todo
            </Button>
        </div>
    )
}
