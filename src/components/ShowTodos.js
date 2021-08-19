import React from 'react'
import Todo from './Todo'
import { makeStyles } from '@material-ui/core'
import {Grid} from '@material-ui/core';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
    main:{
        minHeight:'100vh',
        display: 'flex',
        flexDirection:'column',
        position: 'relative',
        top: '20%',
        left: '15%',
    }

})

export default function ShowTodos(props) {

    const classes = useStyles()
    return (
        <div className={classes.main}>
                <Typography variant='h2' color="primary">
                    All Todos
                </Typography>
                <br/>
               {props.todos.map((todo) => {
                   return <Todo deleteTodo={props.deleteTodo} todo = {todo.title} />
               })}
        </div>
    )
}
