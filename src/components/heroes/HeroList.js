import React from 'react'
import { getHeroesByPublisher } from './../../selectors/getHeroesByPublisher';
import { HeroeCard } from './HeroeCard';
import Grid from '@material-ui/core/Grid'

export const HeroList = ({publisher}) => {

    const heroes = getHeroesByPublisher(publisher);

    return (
        <Grid container spacing={4}>

            {
                heroes.map(hero =>(
                    <HeroeCard key={hero.id} 
                    {...hero} link={`./assets/heroes/${hero.id}.jpg`} 
                    hero_is_from_api={false}
                    />
                ))
            }
            
        </Grid>

    )
}