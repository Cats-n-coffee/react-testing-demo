import React from 'react'
import { Box, Typography, Grid, TextField, Button, Collapse } from '@material-ui/core'

const styles = {
    padding: "1em",
    textAlign: "center"
}

export default function FormTest(props) {
    const [pokemonName, setPokemonName] = React.useState('')
    const [pokemonType, setPokemonType] = React.useState('')
    const [pokemonLevel, setPokemonLevel] = React.useState(1)
    const [submitMsg, setSubmitMsg] = React.useState(false)

    function handleSubmit(e) {
        e.preventDefault();
        const info = {pokemonName, pokemonType, pokemonLevel};
        console.log(info);
        
        fetch('/add', { // let's pretend we have the api's domain in .env
            method: 'POST',
            body: JSON.stringify(info)
        })
        .then(res => res.json())
        .then(data => setSubmitMsg(data))
        .catch(err => console.log(err))
        setPokemonName('')
        setPokemonType('')
        setPokemonLevel('')
    }

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <Typography component="h2" variant="h4" style={styles}>
                Pokemon Submission
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={10} >
                    <TextField 
                        type="text" 
                        id="pokemonName" 
                        label="Pokemon Name" 
                        variant="outlined"
                        name="name" 
                        fullWidth
                        onChange={(e) => setPokemonName(e.target.value)}
                        value={pokemonName}
                    />
                </Grid>
                <Grid item xs={10}>
                    <TextField 
                        type="text" 
                        id="pokemonType" 
                        label="Pokemon Type" 
                        variant="outlined" 
                        name="type"
                        fullWidth
                        onChange={(e) => setPokemonType(e.target.value)}
                        value={pokemonType}
                    />
                </Grid>
                <Grid item xs={10}>
                    <TextField 
                        type="number"
                        min="1"
                        max="200" 
                        id="pokemonLevel" 
                        label="Pokemon Level" 
                        variant="outlined"
                        name="level" 
                        fullWidth
                        onChange={(e) => setPokemonLevel(e.target.value)}
                        value={pokemonLevel}
                    />
                </Grid>
                <Button size="large" variant="contained" color="primary" type="submit">Submit</Button>
                
            </Grid>
                    <Collapse 
                        in={submitMsg}
                        style={{textAlign: "center", padding: '2em', color: 'blueviolet'}}
                    >
                    Your pokemon was submitted
                    </Collapse> 
        </Box>
    )
}

// https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/sign-up/SignUp.js