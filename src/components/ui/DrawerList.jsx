import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import FindInPageIcon from '@material-ui/icons/FindInPage';
import './../../style/style.css';


export const DrawerList = () => {
    return (
        <>
        <List>
                <ListItem button key={'title'}>
                    <Typography variant="h5" color="initial" className='screen-title'>
                        Heroes APP
                    </Typography>
                </ListItem>
            <Divider />

                <ListItem button key={'marvel'}>
                    <ListItemIcon> 
                        <img src={`${process.env.PUBLIC_URL}/assets/icons/marvel-comics.ico`} alt="icon" className='menu-icon'>
                        </img>
                    </ListItemIcon>
                    <Button variant="contained" color="primary">
                        <Link to='/marvel' className='no-decorate'>
                            MARVEL COMICS
                        </Link>
                    </Button>
                </ListItem>

            <Divider />

                <ListItem button key={'dc-comics'}>
                    <ListItemIcon> 
                        <img src={`${process.env.PUBLIC_URL}/assets/icons/dc-comics.ico`} alt="icon" className='menu-icon'>
                        </img> 
                    </ListItemIcon>
                    <Button variant="contained" color="primary">
                        <Link to='/dc' className='no-decorate'>
                            DC COMICS
                        </Link>
                    </Button>
                </ListItem>
                
            <Divider />

                <ListItem button key={'search'}>
                    <ListItemIcon> 
                        <FindInPageIcon fontSize="large" color='primary'/>
                    </ListItemIcon>
                    <Button variant="contained" color="primary">
                        <Link to='/search' className='no-decorate'>
                            SEARCH
                        </Link>
                    </Button>
                </ListItem>    
                
        </List>
        </>
    )
}
