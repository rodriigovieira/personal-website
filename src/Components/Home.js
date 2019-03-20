import React, { Component } from 'react'

export default class Home extends Component {
  renderPortuguese = () => {
    return (
      <div>
        <ul>
          <li><a href="http://clone.rodrigovieira.work">Twitter Clone</a> - Aplicativo Fullstack com NodeJS, React e React Native. Clone do Twitter.</li>
          <li><a href="https://movies.rodrigovieira.work">Buscador de Filmes</a> - Aplicativo para buscar filmes feito em React, consumindo a API do TMDB.</li>
          <li><a href="https://colorpicking.rodrigovieira.work">Jogo de Cores</a> - Jogo de adivinhar a cor através do seu código RGB.</li>
          <li><a href="https://indecision.rodrigovieira.work">Indecision App</a> - Aplicativo que seleciona uma opção aleatória dentre várias opções.</li>
          <li><a href="https://github.com/rodriigovieira/socket-app">Chat</a> - Chat ao vivo utilizando Socket.IO com NodeJS.</li>
          <li><a href="https://github.com/rodriigovieira/schedule-manager">Schedule Manager</a> - Aplicativo em NodeJS seguindo o padrão RESTFUL para gerenciamento de horários de uma empresa. Não apresenta interface gráfica.</li>
          <li><a href="https://github.com/rodriigovieira/todo-app">Todo APP</a> - Aplicativo em NodeJS seguindo o padrão RESTFUL para gerenciamento de tarefas. Não apresenta interface gráfica.</li>
        </ul>
      </div>
    )
  }

  renderEnglish = () => {
    return (
      <div>
        <ul>
          <li><a href="http://clone.rodrigovieira.work">Twitter Clone</a> - Fullstack application made with NodeJS, React and React Native.</li>
          <li><a href="https://movies.rodrigovieira.work">Movies Searcher</a> - Movies searching application made with React by fetching data from TMDB's API.</li>
          <li><a href="https://colorpicking.rodrigovieira.work">ColorPicking Game</a> - Color guessing game, where you have to guess the color by it's RGB code.</li>
          <li><a href="https://indecision.rodrigovieira.work">Indecision App</a> - Application that selects a random option within several different choices.</li>
          <li><a href="https://github.com/rodriigovieira/socket-app">Chat</a> - Live Chat application made with Socket.IO and NodeJS.</li>
          <li><a href="https://github.com/rodriigovieira/schedule-manager">Schedule Manager</a> - NodeJS app, following the RESTFUL standard, made to help manage the schedule of a company. No UI available.</li>
          <li><a href="https://github.com/rodriigovieira/todo-app">Todo APP</a> - NodeJS RESTFUL app made to manage Todos. No UI available.</li>
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.props.lang.indexOf('pt') >= 0 ? this.renderPortuguese() : this.renderEnglish()}
      </div>
    )
  }
}
