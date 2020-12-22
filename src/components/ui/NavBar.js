import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import {withWidth, Hidden} from '@material-ui/core'
import TemporaryDrawer from './TemporaryDrawer';
import '../../style/style.css'

const NavBar = ({width}) => {
    console.log(width);
    return (
        <>
            <AppBar position="fixed" color="primary" 
            >
                <Toolbar>

                    <Typography variant="h5" color="initial" className='navbar-title'>
                        <Link to='./' className='no-decorate'>
                        Heroes APP
                        </Link>
                    </Typography>
                    
                    <Box m={2}>
                    </Box>

                    <Hidden xsDown>
                        <Button variant="contained" color="primary" >
                            <Link to='/marvel' className='no-decorate'>
                                Marvel Comics
                            </Link>
                        </Button>

                        <Box m={1}></Box>

                        <Button variant="contained" color="primary">
                            <Link to='/dc' className='no-decorate'>
                                DC Comics
                            </Link>
                        </Button>

                        <Box m={1}></Box>

                        <Button variant="contained" color="primary">
                            <Link to='/search' className='no-decorate'>
                                Search
                            </Link>
                        </Button>

                        <Box mx='auto'>
                        </Box>
                        
                        <Button variant="contained" color="primary" className='login-btn' disabled>
                            <Link to='./login' className='no-decorate'>
                                Login
                            </Link>
                        </Button>

                    </Hidden>

                    <Hidden smUp>
                        

                        <Button variant="contained" color="primary" disabled>
                            <Link to='./login' className='no-decorate'>
                                Login
                            </Link>
                        </Button>
                        
                        <Box mx='auto'>
                        </Box>

                        <TemporaryDrawer />
                        
                    </Hidden>

                </Toolbar>

            </AppBar>

            <Box m={10}>
            </Box>

        </>
    )
}

export default withWidth()(NavBar);