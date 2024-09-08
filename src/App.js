import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import FilmesIvo from './components/Filmes/FilmesIvo';
import Mensagem from './components/Mensagem/Mensagem';
import Form from './components/Form/Form';

function App() {
 
  return (
    <main>
      <div className='App'>
        <Header />
        <div className='container'>
          <Mensagem cor="red">
            O melhor é ptaticar sempre.
          </Mensagem> 
        </div>
        <section>
          <FilmesIvo />
        </section>
        <section className='contato'>
          <h2>Gostou? Entre em contato conosco</h2>
          <Form />
        </section>
      </div>
      <Footer />
    </main>
  );
}

export default App;
