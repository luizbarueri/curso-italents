import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Filmes from './components/Filmes/Filmes';
import Mensagem from './components/Mensagem/Mensagem';
import Form from './components/Form/Form';
import Button from './components/Button/Button';
import { useState } from 'react';

function App() {
  // function handleClick() {
  //   alert('OLá');
  // }
  // let count = 0;
  const [count, setCount] = useState(0);

  function handleClickBotao1() {
    alert('Clicou no botao 1')
  }
  function handleClickBotao2() {
    console.log('Clicou no botao 2')
  }
  function adiciona() {
    setCount(count + 1);
  }
  function subtrair() {
    setCount(count - 1);
  }
  return (
    <main>
      <Header />
      <div className='app'>
        <div className='container'>
          <Mensagem cor="red">
            O melhor é ptaticar sempre.
          </Mensagem> 
        </div>
        <Filmes />
        <section className='contato'>
          <h2>Gostou? Entre em contato conosco</h2>
          <Form />
        </section>
        <section>
          <h2>Eventos</h2>
          {/* <button onClick={handleClick}>Click!</button>
          <button onClickCapture={handleClick}>Click!</button> */}
          <Button text ="Botao 1" onClick={handleClickBotao1}/>
          <Button text ="Botao 2" onClick={handleClickBotao2}/>
        </section>
        <section className='eventos'>
          <h3>Contador:</h3>
          <Button text="Adiciona" onClick={adiciona}/>
          <Button text="Subtrair" onClick={subtrair}/>

          <h4>{count}</h4>
        </section>
      </div>
      <Footer />
    </main>
  );
}

export default App;
