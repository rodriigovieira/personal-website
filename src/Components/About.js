import React from 'react';

const portugueseText = 'Meu nome é Rodrigo Vieira, e sou desenvolvedor Fullstack Javascript. Você pode encontrar o meu Resumé no Github.';
const englishText = "My name is Rodrigo Vieira, and I'm a Fullstack Javascript Developer. You can check my resumé at Github.";

const About = (props) => {
  return (
    <div>
      <p>{props.lang === 'pt' ? portugueseText : englishText}</p>
    </div>
  )
}

export default About;
