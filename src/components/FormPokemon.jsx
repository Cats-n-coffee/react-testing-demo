import React from 'react'
import { Box, Typography, Grid, TextField, Button } from '@material-ui/core'

const styles = {
    padding: "1em",
    textAlign: "center"
}

export default function FormPokemon(props) {
    const [pokemonName, setPokemonName] = React.useState('')
    const [pokemonType, setPokemonType] = React.useState('')
    const [pokemonLevel, setPokemonLevel] = React.useState(1)

    function handleSubmit(e) {
        e.preventDefault()
        let obj = {pokemonName, pokemonType, pokemonLevel}
        console.log(obj)
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
                        label="pokemonName" 
                        variant="outlined" 
                        fullWidth
                        onChange={(e) => setPokemonName(e.target.value)}
                        value={pokemonName}
                    />
                </Grid>
                <Grid item xs={10}>
                    <TextField 
                        type="text" 
                        id="pokemonType" 
                        label="pokemonType" 
                        variant="outlined" 
                        fullWidth
                        onChange={(e) => setPokemonType(e.target.value)}
                        value={pokemonType}
                    />
                </Grid>
                <Grid item xs={10}>
                    <TextField 
                        type="number" 
                        id="pokemonLevel" 
                        label="pokemonLevel" 
                        variant="outlined" 
                        fullWidth
                        onChange={(e) => setPokemonLevel(e.target.value)}
                        value={pokemonLevel}
                    />
                </Grid>
                <Button size="large" variant="contained" color="primary" type="submit">Submit</Button>
            </Grid>
        </Box>
    )
}