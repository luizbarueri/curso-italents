import Saldacao from '../Saldacao/Saldacao';
import './header.css'

const Header = () => {
    return (
        <header className="header">
            <h1>Certificados</h1>
            <Saldacao nome="Luiz" sobrenome="Santos"/>
        </header>
    )
}

export default Header;