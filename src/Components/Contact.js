import React from 'react';

const portugueseText = 'Você pode entrar em contato comigo através do e-mail rodriigovieira@gmail.com.';
const englishText = "You can contact me at the e-mail rodriigovieira@gmail.com.";

const Contact = (props) => {
  return (
    <div>
      <p>{props.lang.indexOf('pt') >= 0 ? portugueseText : englishText}</p>
    </div>
  )
}

export default Contact;
