import React from 'react'
import { HeroList } from '../heroes/HeroList';
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

export const DcScreen = () => {
    const company = 'DC Comics';

    return (
        <div className='info-screen'>
            <Typography variant="h4" color="initial" className='screen-title'>
                DC Comics
            </Typography>
            <hr/>

            <Box m={2}>
            
            </Box>

            <HeroList publisher={company} />
        </div>
    )
}