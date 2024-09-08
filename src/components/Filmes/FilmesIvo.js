import Filme from '../Filme/Filme';
import './filmes.css';

const FilmesIvo = (props) => {

    const filmes = [
        {
            nome: "Certificado 1",
            poster: "Certificado1.png",
            anoLancamento: "2021"
        },
        {
            nome: "Certificado 2",
            poster: "Certificado2.png",
            anoLancamento: "2022"
        },
        {
            nome: "Certificado 3",
            poster: "Certificado3.png",
            anoLancamento: "2023"
        },
        {
            nome: "Certificado 4",
            poster: "Certificado4.png",
            anoLancamento: "2024"
        }
        
    ]
    return(
        <section className='filmes'> 
            <h2>Lista de Certificados</h2>
            <ul className='filmes-lista'>
                {filmes.map((filme, index) => (
                    <Filme filme = {filme} key = {index}/>
                ))}
                
                
            </ul>
            {/* <div className='filme-destaque'>
                <h2>Filme Destaque</h2>
            {filmes.filter((filme) => filme.anoLancamento <= 2021)
            .map((filme) => (
                    <div>
                        <img src={filme.poster} alt={filme.nome}/>
                        <h4>{filme.nome}</h4>
                        <p>{filme.anoLancamento}</p>
                    </div>    
                ))}
            </div> */}
        </section>
       
    )
}

export default FilmesIvo;