import 'cypress-react-selector';

describe('should render the homePage', () => {
    it('renders correctly', () => {
        cy.visit("/")
        cy.get('#root')
        cy.waitForReact(1000, '#root')
    })
    
    it('navigates to the form page', () => {
        cy.get('a[href="/form"]').as('formLink');
        cy.get('@formLink').click();

        cy.location().should(location => {
            expect(location.pathname).to.eq('/form')
        })
    })

    it('takes user input and submits the form', () => {
        const userObj = {
            name: "pikachu",
            type: 'electric',
            level: 10
        }

        cy.react('TextField', { props: { name: 'name' } }).type(userObj.name);
        cy.react('TextField', { props: { name: 'type' } }).type(userObj.type);
        cy.react('TextField', { props: { name: 'level' } }).type(userObj.level);
        cy.react('FormTest').find('button[type="submit"]').click();

        cy.react('Collapse').should('have.text', 'Your pokemon was submitted')
    })
})

// First without the react selector library
// https://levelup.gitconnected.com/ui-testing-a-react-app-using-cypress-247c3bc4cd94
// Then with the react selector library
//https://abhinaba-ghosh.medium.com/react-testing-made-easy-with-cypress-262340597b08
