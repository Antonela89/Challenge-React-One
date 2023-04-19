import Logo from '../Logo';
import Boton from '../Boton';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <Logo/>
            <Boton contenido ="nuevo video"/>
        </header>
    )  
}

export default Header