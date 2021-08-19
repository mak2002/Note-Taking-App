import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox';
import {Grid} from '@material-ui/core';

const useStyles = makeStyles({
    main: {
        display: 'flex',
    }
})

export default function Todo({todo, deleteTodo }) {

    const handleClick = () => {
        console.log(todo.id)
        deleteTodo(todo.id)
    }

    const classes = useStyles()
    return (
            <div>
                <div className={classes.main}>
                <Checkbox color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} onClick={handleClick}/>
                <Typography variant='h4'>
                    {todo}
                </Typography>
                </div>
            </div>
    )
}
