import styled from 'styled-components';
import Carrousel from '../Carrousel';
import { colorBlackDark } from '../UI/variables';
// import CategoriaTitulo from '../CategoriaTitulo';

const StyleCategoria = styled.div`
    background-color: ${colorBlackDark};
    padding: 2.5rem 0;
`

const Categoria = () => {
    return (
        <StyleCategoria>
            {/* <CategoriaTitulo />  
            Renderizado condicional, en la primer linea no se muestra por que esta en el banner
            posible solucion... si es el primer elemnto del array [posicion 0] no se muestra*/ }
            <Carrousel/>
        </StyleCategoria>
    )
}

export default Categoria