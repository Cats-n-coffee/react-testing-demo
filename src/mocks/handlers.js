import {rest} from 'msw'

export const handlers = [
    rest.post('/add', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({message: 'pokemon added'}))
    })
]