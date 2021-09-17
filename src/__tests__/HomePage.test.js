import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';
import HomePage from '../components/HomePage';

test('it renders the home page component', () => {
    render(<HomePage />)

    const navbar = screen.getByRole('navigation')
    expect(navbar).toBeInTheDocument()
})

describe('the router works for all routes', () => {
    it('should take the user to the form', () => {
        render(<MemoryRouter initialEntries={['/cards']}>
                    <HomePage />
                </MemoryRouter>)
  
        const formLink = screen.getByRole('link', {name: /form/i})
        userEvent.click(formLink);
        const formPage = screen.getByRole('heading', {name: /pokemon submission/i})
        expect(formPage).toBeInTheDocument()
    })

    it('should bring the user back to cards', () => {
        render(<MemoryRouter initialEntries={['/form']}>
                    <HomePage />
                </MemoryRouter>)
        
        const cardsLink = screen.getByRole('link', {name: /cards/i})
        userEvent.click(cardsLink);
        const cardsPage = screen.getByRole('heading', {name: /all cards/i})
        expect(cardsPage).toBeInTheDocument()
    })
})

// need to test the routes --> see in the react router docs

// Next to do: 
// - find a pokemon api
// - make the cards
// - mock the api and test it