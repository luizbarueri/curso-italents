import { useState } from 'react';
import './filmes.css';
import FormInput from '../FormInout/FormInput';
import Button from '../Button/Button';


const Filmes = (props) => {
    const [filmes, setFilmes] = useState([
            {
                nome: "logo512.png",
                categoria: "ação",
                ano: 2024
            },
            {
                nome: "filme2.png",
                categoria: "animado",
                ano: 2021
            },
            {
                nome: "Filme3.png",
                categoria: "Barbara - Paris 2024",
                ano: 2022
            }
        ]);

    
    const [filmesForm, setFilmesForm] = useState({
        nome: "",
        categoria: "",
        ano: ""
    })

    const handleFieldsChange = (event) => {
        setFilmesForm({
            ...filmesForm,
            [event.target.name]: event.target.value
        })
        console.log({filmesForm})

    }

    const handleClick = () => {
        setFilmes([...filmes, filmesForm])
        console.log("Cadastrado")
        setFilmesForm({
            nome: "",
            categoria: "",
            ano: ""
        })
    }

    return(
        <section className='filmes'> 
            <form className='form'>
                <FormInput inputName="Nome" id="name" name="nome" type="text" value={filmesForm.nome} onChange={event => handleFieldsChange(event)}/>
                <FormInput inputName="Categoria" id="categoria" name="categoria" type="text" value={filmesForm.categoria} onChange={event => handleFieldsChange(event)}/>
                <FormInput inputName="Ano" id="ano" name="ano" type="text" value={filmesForm.ano} onChange={event => handleFieldsChange(event)}/>
                <Button text="cadastrar" type="submit" onClick={handleClick}/>
            </form>
             <section className='item-filme'>
                {/* {<img src={filmes[0].nome} alt="Filme" width={"200px"} height={"200px"}/>} */}
                {filmes.map(nomeFilme => <img src={nomeFilme.nome} alt="Filme" width={"200px"} height={"200px"}/>
                )}     
            </section>
        </section>
       
    )
}

export default Filmes;