import React from 'react'
import { AppRouter } from './routers/AppRouter';
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary:{
            main: '#222'
        }
    }
});

export const HeroesApp = () => {
    return (
        <ThemeProvider theme={theme}>
            <AppRouter />
        </ThemeProvider>
    )
}