import './App.css';
import Saudacao from './components/Saldacao/Saldacao';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Filmes from './components/Filmes/Filmes';
import Form from './components/Form/Form';

function App() {
  var idade = 18;
  
  return (
    <div className="principal">
      <Header />
      
      <main className='main'>
        <div className='teste'>
           <h1>Teste</h1>
           <h2>Idade é maio0r que 18? {idade >= 18 ?  "Sim" : "Não"}</h2>
        </div>

        <Saudacao />
        <div className='item-filme'>
          <Filmes />
      
        </div>
        
        <section className='contato'>
          <h1>Gostou, entre em contato para saber mais.</h1>
          <Form />
        </section>
      </main>
     
      <Footer />
    </div>
  );
}

export default App;
