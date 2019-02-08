import React from 'react';

const portugueseText = 'Meu nome é Rodrigo Vieira, e sou desenvolvedor Fullstack Javascript. Você pode encontrar o meu Resumé no Github.';
const englishText = "My name is Rodrigo Vieira, and I'm a Fullstack Javascript Developer. You can check my resumé at Github.";

const About = (props) => {
  return (
    <div>
      <p>{props.lang.indexOf('pt') >= 0 ? portugueseText : englishText}</p>

      <a href="https://github.com/rodriigovieira/resume/blob/master/README-pt.md">Resumé em Português</a>
      <hr/>
      <a href="https://github.com/rodriigovieira/resume">Resumé in English</a>

    </div>
  )
}

export default About;
