import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colorGray, colorPrimaryMedium, fuenteSecundaria } from '../UI/variables';


const StyleBoton  = styled.button`
    border: 1px solid colorGray;
    border-radius: 4px;
    padding: 2.1rem 3rem;
    text-transform: capitalize;
    background-color: transparent;
    font-size: 2.1rem;
    font-family: fuenteSecundaria;
    &:hover {
        border: 1px solid ${colorPrimaryMedium};
        background-color: ${colorGray};
    }
`

const Boton = (props) => {

    const { contenido } = props;
    return (
        <StyleBoton>
            <Link className='boton__link' to={'/nuevoVideo'}>{contenido}</Link> 
        </StyleBoton>
    )
}

export default Boton