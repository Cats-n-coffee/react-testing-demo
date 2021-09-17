describe('should render the homePage', () => {
    it('renders correctly', () => {
        cy.visit("/")
        cy.get('#root')
    })
})

//https://abhinaba-ghosh.medium.com/react-testing-made-easy-with-cypress-262340597b08