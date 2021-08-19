import React from 'react'
import Note from './Note'
import {Grid} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core'


export default function ShowNotes(props) {
    
    const useStyles = makeStyles({
        main: {
            backgroundColor: '#ffffff'
        },
        
        grid: {
            display: 'flex',
            flexDirection: 'row',
            // minHeight: '100vh',
            padding: '40px',
            backgroundColor: '#ffffff',
            // height: '100vh',
        },

        griditem: {
            padding: '20px',
        }
        
    })

    {var i = 0}
    console.log(props.Notes)
    const classes = useStyles()
    return (
        <div className="notes-show">
            <Grid container className={classes.grid}>
            {props.Notes.map((note) => { 
            {console.log(note)}
            {i++}
            return <Note deleteNote={props.deleteNote} note={note} key={i}/>
            })}
            </Grid>
        </div>
    )
}
