import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FormTest from "../components/FormTest";

test('Form pokemon should render', () => {
    render(<FormTest />)

    const formTitle = screen.getByRole('heading', {name: /pokemon submission/i})
    expect(formTitle).toBeInTheDocument()
})

describe('Form takes input and validates', () => {
    it('should take user input and submit', () => {
        render(<FormTest />)

        const userInput = {
            pokemonName: 'pikachu',
            pokemonType: 'electric',
            pokemonLevel: 10
        }

        const nameField = screen.getByLabelText(/pokemon name/i)
        userEvent.type(nameField, userInput.name);

        const typeField = screen.getByLabelText(/pokemon type/i);
        userEvent.type(typeField, userInput.type);

        const levelField = screen.getByLabelText(/pokemon level/i);
        userEvent.type(levelField, userInput.level);
        
        const submitBtn = screen.getByRole('button', /submit/i);
        userEvent.click(submitBtn)

        const submitMessage = screen.getByText(/your pokemon was submitted/i);
        expect(submitMessage).toBeInTheDocument()
    })
    
})