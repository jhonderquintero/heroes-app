import React from 'react'
import {
    makeStyles,
    Drawer, Divider
} from '@material-ui/core'

const drawerWidth= 240;

const styles = makeStyles(theme =>({
    drawer: {
        width: 70,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,

}));

export const DrawerComponent = () => {

    const classes = styles();

    return (
        <Drawer className={classes.drawer}
        variant='permanent'
        classes={{
            paper: classes.drawerPaper,
        }}
        anchor='left'>

            <div className={classes.toolbar}></div>
                
            <Divider />

        </Drawer>

    )
}
