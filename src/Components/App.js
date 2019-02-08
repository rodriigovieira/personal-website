import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';

import '../styles/index.scss';

export default class App extends Component {
  state = {
    lang: 'en',
  }

  componentDidMount() {
    this.setState({ lang: navigator.language || navigator.userLanguage });
  }

  render() {
    const aboutText = this.state.lang === 'pt' ? 'Sobre' : 'About';
    const contactText = this.state.lang === 'pt' ? 'Contato' : 'Contact';

    return (
      <Router>
        <header>
          <h1>Rodrigo Vieira</h1>

          <div id="navbar">
            <NavLink to="/" exact={true}>Home</NavLink>
            <NavLink to="/about">{aboutText}</NavLink>
            <NavLink to="/contact">{contactText}</NavLink>
          </div>

          <div id="buttons">
            <button onClick={() => this.setState({ lang: 'pt' })}>Português</button>
            <button onClick={() => this.setState({ lang: 'en' })}>English</button>
          </div>

          <Switch>
            <Route
              path="/"
              exact
              render={() => <Home lang={this.state.lang} />}
            />
            <Route
              path="/about"
              render={() => <About lang={this.state.lang} />}
            />
            <Route
              path="/contact"
              render={() => <Contact lang={this.state.lang} />}
            />
          </Switch>
        </header>
      </Router>
    )
  }
}
