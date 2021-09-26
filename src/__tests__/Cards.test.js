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

        const searchInput1 = screen.getByLabelText(/pokemon name/i)
        userEvent.type(searchInput1, 'pikachu');

        const submitButton = screen.getByRole('button', {name: /submit/i})
        userEvent.click(submitButton);

        //const cardsSection = screen.getByRole('region', {name: /all-cards/i})
    
        //await waitFor(() => expect(pokemon).toHaveTextContent('pikachu')) 
        userEvent.clear(searchInput1)
        
        const searchInput2 = screen.getByLabelText(/pokemon name/i)
        userEvent.type(searchInput2, 'mew');

        //const submitButton2 = screen.getByRole('button', {name: /submit/i})
        userEvent.click(submitButton);
        
        const pokemon = screen.findAllByLabelText(/pokemon-searched/i);
        screen.debug()
        //await waitFor(() => expect(pokemon).toHaveLength(2)) 
        expect(pokemon).toHaveLength(2)
    })
}) 