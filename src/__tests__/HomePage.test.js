import { render, screen } from '@testing-library/react'
import HomePage from '../components/HomePage';

test('it renders the home page component', () => {
    render(<HomePage />)

    const navbar = screen.getByRole('navigation')
    expect(navbar).toBeInTheDocument()
})

// need to test the routes --> see in the react router docs

// Next to do: 
// - find a pokemon api
// - make the cards
// - mock the api and test it