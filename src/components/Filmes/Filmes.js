import Button from '../Button/Button';
import Filme from '../Filme/Filme';
import FormInput from '../FormInout/FormInput';
import './filmes.css';
import { useEffect, useState } from 'react';

const Filmes = (props) => {
    
    const [filmes, setFilmes] = useState([]);

    useEffect(
        () => {
            getMovies();
            console.log('executado uma vez apos construção do componente!')
    }, [])

    const [filmesForm, setFilmesForm] = useState({
        nome: "",
        poster: "",
        anoLancamento: ""
    })
    const handleFieldsChange = (event) => {
        setFilmesForm(
            {
                ...filmesForm,
                [event.target.name]: event.target.value
            }
        )
        console.log(filmesForm)
    }
        
    const getMovies = async () => {
        //GET para buscar os dados em db.json
        const response = await fetch('http://localhost:3005/movies')
        const data = await response.json();
        setFilmes(data);
       
    }
   
    const handleClick = async () => {
        // setFilmes([...filmes, filmesForm]);
        const response = await fetch('http://localhost:3005/movies', {
            method: 'POST',
            headers: new Headers({
                "Content-TYpe": "application/json"
            }),
            body: JSON.stringify(filmesForm)
        })

        const data = await response.json();
        alert(`Filme: ${data.nome} cadastrado com sucesso!`);
        getMovies();

        setFilmesForm(
            {
                nome: "",
                poster: "",
                anoLancamento: ""
            }
        )
    }
   
    // const handleClickRemover = () => {
    //     console.log("Remover");
    // }

    return(
        <section className='filmes'> 
            <h2>Lista de Certificados</h2>
            <form className='form'>

                <FormInput inputName="Nome" id="nome" 
                    name="nome"
                    type="text" 
                    value={filmesForm.nome}
                    onChange={ (event) => handleFieldsChange(event) }

                 />
                <FormInput inputName="Poster" id="poster" 
                    name="poster"
                    type="text" 
                    value={filmesForm.poster}
                    onChange={ (event) => handleFieldsChange(event) }
                 />
                <FormInput inputName="Ano" id="anoLancamento" 
                    name="anoLancamento"
                    type="text" 
                    value={filmesForm.anoLancamento}
                    onChange={ (event) => handleFieldsChange(event) }
                />

                <Button text= "Cadastrar" type="submit" onClick={handleClick}/>
                {/* <Button text= "Remover" type="button" onClick={handleClickRemover}/> */}
            </form>

            <ul className='filmes-lista'>
                {filmes.map((filme, index) => (
                    <Filme filme={filme} key={index}/>
                ))}
            </ul>
           
            <div className='filme-destaque'>
                <h2>Poster Destaque</h2>
                {filmes.filter((filme) => filme.anoLancamento <= 1998)
                .map((filme) => (
                        <div>
                            <img src={filme.poster} alt={filme.nome}/>
                            <h4>{filme.nome}</h4>
                            <p>{filme.anoLancamento}</p>
                        </div>    
                    ))}
            </div>
        </section>
       
    )
}

export default Filmes;