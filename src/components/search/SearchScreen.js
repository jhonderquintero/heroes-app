import React, {useState} from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { IconButton } from '@material-ui/core';
import { HeroeCard } from './../heroes/HeroeCard';
import { useFetch } from './../../hooks/useFetch';
import InputAdornment from '@material-ui/core/InputAdornment';
import queryString from 'query-string';
import Typography from '@material-ui/core/Typography'
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField'
import {Alert, AlertTitle} from '@material-ui/lab';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import './../../style/style.css'

const useStyles = makeStyles((theme) => ({
    root: {
    width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
    },
    },
}));

export const SearchScreen = React.memo(({history}) => {
    const classes = useStyles();
    
    const [input, setInput] = useState('');
    let url = ''; 

    const location = useLocation();
    let {q} = queryString.parse(location.search);
    console.log('q', q);

    const handleSearch = (e) =>{
        e.preventDefault();
        history.push(`?q=${input}`);
    }

    const handleClick = () =>{
        history.push(`?q=${input}`);
    }

    const handleChange = ({target}) =>{
        setInput(target.value);
    }

    url = `https://superheroapi.com/api.php/10217361012486618/search/${encodeURI(q)}`;
    
    const {data, loading} = useFetch(url);
    let heroes = null;

    if(data !== null){
        heroes = data.results;
    }

    return (

        <div className='info-screen'>
            <Typography variant="h4" color="initial" className='screen-title'>
                Search a Hero
            </Typography>
            <hr />

            <Box m={4}>
            
            </Box>

            <form onSubmit={handleSearch}>
                <TextField
                error={false}
                id="filled-helperText"
                label="Search"
                size='medium'
                fullWidth
                autoComplete='off'
                InputProps={{
                    endAdornment: 
                    <InputAdornment position="end">
                        <IconButton aria-label="Search" onClick={handleClick}>
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>,
                }}
                onChange={handleChange}
                variant="filled"
                />
            </form>

            <Box m={4}>
            
            </Box>
            
            {
                loading?
                <div className={classes.root}>
                    <LinearProgress color='secondary'/>
                    <LinearProgress color="primary" />
                </div>
                :
                <div>
                    <Grid container spacing={4}>
                    {
                        (typeof heroes === 'object')?
                        heroes.map(hero =>{
                            return(
                                <HeroeCard key={hero.id}
                                superhero={hero.name} id={hero.id}
                                alter_ego={hero.biography.['full-name']}
                                first_appearance={hero.biography.['first-appearance']}
                                link={hero.image.url}
                                hero_is_from_api={true}
                                />
                                )
                        })
                        :
                        <>
                        {
                            q !== ''  && q !== undefined?
                                <Alert severity="error" className='search-alert'>
                                    <AlertTitle>Error</AlertTitle>
                                    Superhero you are looking for is not in our database. Try looking for another!
                                </Alert>
                            :
                            <Alert severity="info" className='search-alert'>
                                <AlertTitle>Info</AlertTitle>
                                Write the name of a superhero and get his data — check it out!
                            </Alert>
                        }
                        </>
        
                    }
                    </Grid>
                </div>
            }

        </div>
    )
})