import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'


const Hello = ({name})=>{
    return(
        <h1>
            {name}
        </h1>
    )
}

const modifyComponent = (Component, value)=>{
    return() =>{
        return(
            <Component name={value} />
        )
    }
}

const HOC = modifyComponent(Hello, 'HOC'); 

export const LoginScreen = ({history}) => {

    const handleLogin = () =>{
        history.push('/');
    }

    return (
        <>
            <Typography variant="h4" color="initial">LoginScreen</Typography>
            <hr/>

            <Button variant="contained" color="primary"
            onClick={handleLogin}>
                Login
            </Button>

            <HOC />
        </>
    )
}