import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Box from '@material-ui/core/Box'
import '../../style/style.css'

export const HeroeCard = ({superhero, id, alter_ego, first_appearance, link, hero_is_from_api}) => {

    return (
        <Grid item xs={12} sm={12} md={6} lg={4}>
                
            <Card className='card-root'>
                <Grid container spacing={2}>
                    <Grid item xs={5}>
                        <CardMedia
                        style={{minHeight: 300, width: '100%'}}
                        title={superhero}
                        image={link}
                        />
                    </Grid>
                    <Grid item xs={7} className='card-content'>
                        <CardContent className='card-content-item'>
                            <Typography variant="h4" color="primary" >
                            {superhero}
                            </Typography>
                            <Box m={2}>
                            
                            </Box>
                            
                            <Typography variant="h6" color="initial">{alter_ego}</Typography>
                            
                            <Box m={2}>
                            
                            </Box>
                            <Typography variant="body1" color="initial">
                            {first_appearance}
                            </Typography>
                        </CardContent>
                        <Box m={1}>
                            
                        </Box>

                        {
                            !hero_is_from_api?
                            (
                                <CardActions className='card-button'>
                                    <Button size="medium" color='primary' variant='outlined' >
                                        <Link to={`./hero/${id}`} className='button-no-decorate'>
                                            View More
                                        </Link>
                                    </Button>
                                </CardActions>
                            ):
                            <>
                            </>
                        }
                    </Grid>
                </Grid>
            </Card>

        </Grid>
    )
}