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

        const cardsSection = screen.getByRole('region', {name: /all-cards/i})
        await waitFor(() => expect(cardsSection).toHaveTextContent('mew')) 
    })
    it('should allow for a second pokemon to show on the page', async() => {
        render(<Cards />)

        const searchInput = screen.getByLabelText(/pokemon name/i)
        userEvent.clear(searchInput)
        userEvent.type(searchInput, 'pikachu');

        const submitButton = screen.getByRole('button', {name: /submit/i})
        userEvent.click(submitButton);

        const pokemon = await screen.findAllByLabelText(/pokemon-searched/i);
        expect(pokemon).toHaveLength(1);

        userEvent.clear(searchInput)
        userEvent.type(searchInput, 'mew');
        userEvent.click(submitButton);
        
        
        screen.debug()
        //await waitFor(() => expect(pokemon).toHaveLength(2)) 

        expect(pokemon).toHaveLength(2)
    })
}) 