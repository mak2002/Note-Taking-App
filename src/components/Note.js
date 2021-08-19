import React from 'react'
import { makeStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { IconButton, Typography } from '@material-ui/core';
import {Grid} from '@material-ui/core';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import EditIcon from '@material-ui/icons/Edit';
import Drawer from '@material-ui/core/Drawer';


export default function Note({ note, deleteNote }) {
    const useStyles = makeStyles({
        title:{
            // width:'50%',
            fontSize: 35,
            // textAlign: 'center',
        },
        
        text:{
            fontSize: 15,
        },

        griditem: {
            backgroundColor: '#ffffff',
            padding: '10px',
            margin: '30px'
        },
        btn: {
            cursor: 'pointer',
            alignItems: 'flex-end',
            justifyContent: 'center'
        },
        card_component:{
            padding: '60px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent:'space-between',
        }
    })

    const handleClick = () => {
        deleteNote(note.id)
    }
    const classes = useStyles()
    return (
        <div>
                <Grid item xs={12} className={classes.griditem}>
                    <Card >
                            <CardContent className={classes.card_component}>
                        <div >
                                <Typography color="textSecondary" className={classes.title}>
                                {note.title}
                                </Typography>    
                                
                                <Typography color="textSecondary" className={classes.text}>
                                    {note.text}   
                                </Typography>
                                
                        </div>
                            <DeleteForeverSharpIcon className={classes.btn} onClick={handleClick}/>
                            {/* <EditIcon className={classes.btn}/> */}
                        </CardContent>

                    </Card>

            </Grid>
        </div>

    )
}
// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 960px
// lg, large: 1280px
// xl, extra-large: 1920px