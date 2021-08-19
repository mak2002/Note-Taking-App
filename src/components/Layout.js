import React from 'react'
import { makeStyles } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { SubjectOutlined, AddCircleOutlineOutlined } from '@material-ui/icons'
import RepeatIcon from '@material-ui/icons/Repeat';
import { useHistory, useLocation } from 'react-router'

export default function Layout({ children }) {

    const drawerWidth = 240

    const useStyles = makeStyles({

        main: {
            display: 'flex',
        },

        page:{
            background: '#f9f9f9',
            width: '100%',
        },

        drawer: {
            width: drawerWidth,
            display: 'flex',
            flexDirection: 'column',
        },
        drawerPaper : {
            width: drawerWidth,
        },

        active: {
            background: '#f4f4f4',
        },

        list: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        },
        listitem: {
            flex: '1'
        }
    })

    const menuItems = [
        
        {
            text: "Add Note",
            icon : <AddCircleOutlineOutlined color="primary" />,
            path : '/'
        },
        {
            text: "My Notes",
            icon : <SubjectOutlined color="primary" />,
            path : '/shownotes'
        },
        {
            text: "Add ToDo",
            icon : <AddCircleOutlineOutlined color="primary" />,
            path : '/addtodo'
        },
        {
            text: "My Todos",
            icon : <SubjectOutlined color="primary" />,
            path : '/mytodos'
        },
    ]

    const classes = useStyles()
    const history = useHistory()
    const loc = useLocation()
    return (
        <div className={classes.main}>
        <Drawer className={classes.drawer} variant="permanent" anchor="left" 
        classes={{paper: classes.drawerPaper}}>

            <List className={classes.list}>
                {menuItems.map((item) => (
                 <ListItem 
                 button
                 key={item.text}
                 onClick={() => history.push(item.path)}
                 className={loc.pathname == item.path ? classes.active : null }
                 >
                     <ListItemIcon>{item.icon}</ListItemIcon>
                     <ListItemText primary={item.text}/>
                 </ListItem> 
                ))}
            </List>

        </Drawer>

            <div className={classes.page}>
                { children }
            </div>
        </div>
    )
}
