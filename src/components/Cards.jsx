import React from 'react';
import Card from './Card';
import { Typography } from '@material-ui/core';

export default function Cards(props) {
    const [input, setInput] = React.useState('');
    const [pokemon, setPokemon] = React.useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log('submit');

        fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
        .then(res => res.json())
        .then(data => {
            setPokemon(data)
            setInput('')
        })
        .catch(err => console.error(err))
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Pokemon Name:</label>
                <input 
                    type="text" 
                    name="pokemon-name"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            <Typography component="h2" variant="h4">
                All cards
            </Typography>
            <Card pokemon={pokemon}/>
        </div>
    )
}

// inside this component:
// add a short *form* for searching a pokemon by name or by category
// we need another component for the *card component*
// we need *state* to have all the pokemon searches from the user and *display all the searched pokemon*