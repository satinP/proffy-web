import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://p2.trrsf.com/image/fget/cf/460/0/images.terra.com/2013/03/14/einstein-arquivo-afp.jpg" alt="Albert Einstein"/>
        
        <div>
          <strong>Albert Einstein</strong>
          <span>Física</span>
        </div>

      </header>
      
      <p>
        Físico teórico alemão que desenvolveu a teoria da relatividade geral.
        <br /> <br />
        Laureado com o Prêmio Nobel de Física de 1921.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>U$ 3.000</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
        
      </footer>
    </article>
  );
}

export default TeacherItem;