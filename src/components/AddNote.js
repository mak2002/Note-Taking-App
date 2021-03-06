import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles({
    main: {
        backgroundColor: '#ffffff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignText: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    btn: {
        fontSize: 20,
        backgroundColor:'violet',
        margin: '30px'
    },

    title : {
        marginbottom: 20
    },

    textfield : {
        padding: 10,
        width: '100%',
    },
    
    textfield_Note : {
        padding: 10,
        width: '100%',

    }
})
export default function AddNote({ addNote }) {


    const [Toggle, setToggle] = useState(false)
    const [noteTitle, setnoteTitle] = useState()
    const [noteText, setnoteText] = useState()
    

    const classes = useStyles()

    const handleSubmit = (e) => {
        e.preventDefault()

        addNote(noteTitle,noteText)
    }

    return (
        <div className={classes.main}>
            <Typography 
                className = {classes.title} variant='h2' color = 'primary' gutterBottom
            >
            Create Note
            </Typography>

            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                <TextField onChange={(e) => setnoteTitle(e.target.value)}  className={classes.textfield} label='Note Title' variant='outlined' fullWidth/>
                   
                <TextField onChange={(e) => setnoteText(e.target.value)} className={classes.textfield_Note} label='Note' variant='outlined' multiline rows={5}/>

                <br />

                <Button type='submit' varient='outlined'  color='primary' className={classes.btn} >
                    Create Note
                </Button>   
            </form>

        </div>
    )
}
