import React from 'react';

export default function Card(props) {
    const {pokemon} = props;

    //console.log(pokemon)
    return (
        <li aria-label="pokemon-searched">
            <h2>{pokemon.name}</h2>
        </li>
    )
}