import React, {useMemo} from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { getHerobyId } from './../../selectors/getHerobyId';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'

export const HeroesScreen = ({history}) => {

    const {heroId} = useParams();
    let hero_get;
    
    hero_get = useMemo(() => getHerobyId(heroId), [heroId]);

    if(!hero_get){
        return <h1>Invalid URL. Hero not find</h1>
    }
    
    const { // id,
            superhero,
            publisher,
            alter_ego,
            first_appearance,
            characters} = hero_get;

    const handleReturn = () =>{
        history.goBack();
    }

    return (
        <>
            <Card>
                <Grid container spacing={1}>

                    <Grid item sm={5} xs={5} className='screen-card'>
                        <img src={`${process.env.PUBLIC_URL}/assets/heroes/${heroId}.jpg`} className='screen-card-image' alt={superhero} />
                    </Grid>

                    <Grid item sm={7} xs={7}>
                        <CardContent>
                            <Typography variant="h4" color="primary">
                                {superhero}
                            </Typography>
                            <hr />

                            <Typography variant="body1" color="initial">
                                <b>Alter ego:</b> {alter_ego}
                            </Typography>
                            <hr />

                            <Typography variant="body1" color="initial">
                                <b>Publisher: </b> {publisher}
                            </Typography>
                            <hr />
                            <Typography variant="body1" color="initial">
                                <b>First appearance: </b> {first_appearance}
                            </Typography>
                            <hr />
                            <Typography variant="body1" color="initial">
                                <b>Characters: </b>{characters}
                            </Typography>

                        </CardContent>

                        <CardActions>
                            <Button size="large" variant='outlined' color='primary'
                            onClick={handleReturn}>
                                RETURN
                            </Button>
                        </CardActions>

                    </Grid>
                </Grid>

            </Card>

        </>
    )
}