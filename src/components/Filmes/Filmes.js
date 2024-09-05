import './filmes.css';

const listaFilmes = [
    {
        nome: "/logo512.png",
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
]
const Filmes = (props) => {
    return(
        <>
            <img src={listaFilmes[0].nome} alt="Filme" width={"200px"} height={"200px"}/>
            <img src={listaFilmes[1].nome} alt="Filme" width={"200px"} height={"200px"}/>
            <img src={listaFilmes[2].nome} alt="Filme" width={"200px"} height={"200px"}/>
        </>
    )
}

export default Filmes;