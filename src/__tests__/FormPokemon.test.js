import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FormPokemon from "../components/FormPokemon";

test('Form pokemon should render', () => {
    render(<FormPokemon />)

    const formTitle = screen.getByRole('heading', {name: /pokemon submission/i})
    expect(formTitle).toBeInTheDocument()
})