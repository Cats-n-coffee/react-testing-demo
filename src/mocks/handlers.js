import {rest} from 'msw'

export const handlers = [
    rest.post('/add', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({message: 'pokemon added'}))
    }),
    rest.get('https://pokeapi.co/api/v2/pokemon/:name', (req, res, ctx) => {
        const {name} = req.params;

        return res(
            ctx.status(200),
            ctx.json({
                id: 151,
                name
            })
        )
    })
]