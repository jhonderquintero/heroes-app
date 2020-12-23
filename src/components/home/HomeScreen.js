import React from 'react'
import Carousel from 'react-material-ui-carousel'
import {Paper, Button, Box} from '@material-ui/core'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './../../style/style.css'


export const HomeScreen = () => {
    var items = [
        {
            name: "Marvel Comics",
            description: "Find your favorite superhero from our Marvel Comics database!",
            link: '/marvel',
            image: `${process.env.PUBLIC_URL}/assets/images/marvel-img.png`
        },
        {
            name: "DC Comics",
            description: "Find your favorite superhero from our DC Comics database!",
            link: '/dc',
            image: `${process.env.PUBLIC_URL}/assets/images/dc-img.jpg`
        },
        {
            name: "Search",
            description: "Search for any superhero and get information about him!",
            link: '/search',
            image: `${process.env.PUBLIC_URL}/assets/images/background.jpg`
        }];

    return (
        <div className='info-screen'>
            <Carousel transition='500' animation='fade' interval='6000'>
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
        </div>
    );
};

const Item = ({item}) =>{

    const {name, description, link, image} = item;

    return (
        <Paper elevation={1} >
            <div>

                    <div className="carousel-img">
                        <img alt='' src={image}></img>
                        <h2><span>{description} <br /> </span> </h2>
                    </div>

                <Box m={0}>
                
                </Box>

                <Button variant='contained' color='primary' fullWidth>
                    <Link to={link} className='no-decorate'>
                    {name}
                    </Link>
                </Button>
            </div>
        </Paper>
    );
};