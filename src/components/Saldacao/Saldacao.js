import './saudacao.css';

export default function Saldacao() {
    var nome = "Luiz Santos"
    const saudacao = () => `Olá meu nome é ${nome}`;
    return(
        <div className='altura'>
            <h1>{saudacao()}</h1>
        </div>
    );
}