import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Cards from '../components/Cards';

test('it should be on the screen', () => {
    render(<Cards />)

    const searchForm = screen.getByRole('form', {name: /search-form/i})
    expect(searchForm).toBeInTheDocument();
})

describe('it should take user input and add the card to the screen', () => {
    it.skip('should take user input and return the pokemon', async() => {
        render(<Cards />)

        const searchInput = screen.getByLabelText(/pokemon name/i)
        userEvent.type(searchInput, 'mew');

        const submitButton = screen.getByRole('button', {name: /submit/i})
        userEvent.click(submitButton);

        const cardsList = await screen.findByRole('list', {name: /all-cards/i})
        expect(cardsList).toHaveTextContent('mew')
    })
    it('should allow for a second pokemon to show on the page', async() => {
        render(<Cards />)

        const searchInput = screen.getByLabelText(/pokemon name/i)
        userEvent.clear(searchInput)
        userEvent.type(searchInput, 'pikachu');

        const submitButton = screen.getByRole('button', {name: /submit/i})
        userEvent.click(submitButton);

        const pikachu = await screen.findByText(/pikachu/i);
        expect(pikachu).toBeInTheDocument();

        userEvent.clear(searchInput)
        userEvent.type(searchInput, 'mew');
        userEvent.click(submitButton);
        
        const mew = await screen.findByText(/mew/i)
        expect(mew).toBeInTheDocument()
    })
}) 