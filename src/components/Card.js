import React from 'react';

export default function Card(props) {
    const {pokemon} = props;

    console.log(pokemon)
    return (
        <div>
            <h2>{pokemon.name}</h2>
        </div>
    )
}