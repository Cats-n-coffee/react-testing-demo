import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom'
import Cards from './Cards'
import FormTest from './FormTest'

export default function HomePage(props) {
    return (
        <section>
            <Router>
                <nav className="navbar">
                    <ul>
                        <li><Link to="/">Cards</Link></li>
                        <li><Link to="/form">Form</Link></li>
                    </ul>
                </nav>
                <main className="main">
                    <Switch>
                        <Route path="/form" component={ () => <FormTest />} />
                        <Route exact path="/" component={ () => <Cards />} />
                    </Switch>
                </main>
            </Router>
        </section>
    )
}