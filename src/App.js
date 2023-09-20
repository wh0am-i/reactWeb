import React from 'react';
import logo from './images/reactSystem/logo.svg';
import nave from './images/reactSystem/nave.png';
import './App.css';
import abrepopup from './components/PopUp/AbrePop';
import fechapopup from './components/PopUp/FechaPop';

function App() {
  const name = "Ex397";

  function Tempo() {
    return 2+7
  }

  return (
    <div className="App">
      <div>
        <header className="App-header">
          <img src={nave} className="nave" alt="nave" />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            A nave {name} está revolucionando!
            <br />
            Ela demora {Tempo()} segundos para revolucionar!
          </p>
          <span className="app-button" onClick={abrepopup}>Veja mais sobre o Astraios!</span>
          <div className="popup">
            <div className="popup-content">
              <span className="close-button" onClick={fechapopup}>&times;</span>
              <p>Meu projeto final é composto pela construção e engenharia de um telescópio, nomeado Astraios.
                O projeto está na fase final, sendo necessário agora apenas a automatização da base, com
                motores elétricos, microcontrolador e um pouco de programação!
              </p>
              <a
                href='https://glaze-colt-42e.notion.site/Teles-ASTRAIOS-c02b728e7c0c470dae8f26e94ad2cba2'
                target={"_blank"}
                rel="noreferrer"
              >
                Mais sobre o projeto
              </a>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
