import './saudacao.css';

export default function Saldacao({nome, sobrenome}) {
    
    return(
        <div className='saudacao'>
            <p>Olá, meu nome é {nome} {sobrenome}</p>
        </div>
    );
}