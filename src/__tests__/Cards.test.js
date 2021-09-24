import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Cards from '../components/Cards';
import Card from '../components/Card';

test('it should be on the screen', () => {
    render(<Cards />)

    const searchForm = screen.getByRole('form', {name: /search-form/i})
    expect(searchForm).toBeInTheDocument();
})

describe('it should take user input and add the card to the screen', () => {
    it('should take user input and return the pokemon', async() => {
        const cards = render(<Cards />)

        const searchInput = screen.getByLabelText(/pokemon name/i)
        userEvent.type(searchInput, 'mew');

        const submitButton = screen.getByRole('button', {name: /submit/i})
        userEvent.click(submitButton);

        const cardsSection = screen.getByRole('region', {name: /all-cards/i})
        await waitFor(() => expect(cardsSection).toHaveTextContent('mew')) 
    })
}) // in this test suite, after the cards feature in implemented with an array
// it should check for array length