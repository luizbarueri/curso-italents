import './mensagem.css';

const Mensagem = ({cor, children}) => {
    return (
        <div className='mensagem'>
            <h3>Mensagem do dia </h3>
            <p style={{color: cor}}>{children}</p>
        </div>
    )
}

export default Mensagem;