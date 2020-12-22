import React from 'react'
import { HeroList } from '../heroes/HeroList';
import '../../style/style.css'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

export const MarvelScreen = () => {
    const company = 'Marvel Comics';

    return (
        <div className='info-screen'>
            <Typography variant="h4" color="initial" className='screen-title'>
                Marvel Comics
            </Typography>
            <hr/>
            
            <Box m={2}>
            
            </Box>
            
            <HeroList publisher={company} />
        </div>
    )
}