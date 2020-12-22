import React from 'react'
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { HomeScreen } from './../components/home/HomeScreen';
import { MarvelScreen } from './../components/marvel/MarvelScreen';
import { SearchScreen } from './../components/search/SearchScreen';
import { HeroesScreen } from './../components/heroes/HeroesScreen';
import { DcScreen } from './../components/dc/DcScreen';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './../components/ui/NavBar';
import {
    Switch,
    Route,
} from "react-router-dom";


export const DashboardRoutes = () => {

    return (
        <div>
            <CssBaseline />
            {/* NAVIGATION BAR */}
            <NavBar />

            {/* MAIN CONTENT */}
            <main>
                    <Switch>
                        <Route exact path='/marvel' component={MarvelScreen} />
                        <Route exact path='/dc' component={DcScreen} />
                        <Route exact path='/hero/:heroId' component={HeroesScreen} />
                        <Route exact path='/hero/API/:hero' component={HeroesScreen} />
                        <Route exact path='/search' component={SearchScreen} />
                        <Route exact path='/' component={HomeScreen} />
                        <Redirect to='/'/>
                    </Switch>
            </main>

            <hr/>


        </div>
    )
}