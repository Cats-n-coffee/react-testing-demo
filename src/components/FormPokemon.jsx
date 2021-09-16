import React from 'react'
import { Box, Typography, Grid, TextField, Button } from '@material-ui/core'

const styles = {
    padding: "1em",
    textAlign: "center"
}

export default function FormPokemon(props) {
    const [pokemon, setPokemon] = React.useState({name: '', type: '', level: 1})
    const [pokemonType, setPokemonType] = React.useState('')
    const [pokemonLevel, setPokemonLevel] = React.useState(1)
    const [errors, setErrors] = React.useState({
        name: '', 
        type: '', 
        level: ''
    })

    function handleChange(e) {
        e.preventDefault();
        setErrors({name: '', type: '', level: ''})
        let regex = /[a-zA-Z]/g;
        if (e.target.name === 'name' && !regex.test(e.target.value) && e.target.value !== '') {
            setErrors({...errors, name: 'Only letters here!'})
        }
        if (e.target.name === 'type' && !regex.test(e.target.value) && e.target.value !== '') {
            console.log('change in type')
            setErrors({...errors, type: 'Only letters here!'})
        }
        if (e.target.name === 'level' && (e.target.value < 1 || e.target.value > 200) && e.target.value !== '') {
            console.log('change in level')
            setErrors({...errors, level: 'Between 1 and 200'})
        }
        else {
            let key = e.target.name;
            let value = e.target.value
            setPokemon({...pokemon, [key]: value})
        }
    }

    function checkErrors(e) {
        let field = e.target.name;
        if (errors[field] === '') {
            console.log('empty')
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(pokemon)
        setPokemon({name: '', type: '', level: 1})
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
                        error={Boolean(errors?.name)}
                        helperText={errors?.name}
                        onChange={handleChange}
                        onBlur={checkErrors}
                        value={pokemon.name}
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
                        error={Boolean(errors?.type)}
                        helperText={errors?.type}
                        onChange={(e) => setPokemonType(e.target.value)}
                        onBlur={checkErrors}
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
                        error={Boolean(errors?.level)}
                        helperText={errors?.level}
                        onChange={(e) => setPokemonLevel(e.target.value)}
                        value={pokemonLevel}
                    />
                </Grid>
                <Button size="large" variant="contained" color="primary" type="submit">Submit</Button>
            </Grid>
        </Box>
    )
}