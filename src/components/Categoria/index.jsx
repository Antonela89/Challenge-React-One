import styled from 'styled-components';
// import { colorBlackDark } from '../UI/variables';
import { StyleTitulo, StyleH2, StyleCarrousel, StyleCard } from '../UI';

const StyleCategoria = styled.div`
    padding: 2.5rem 0;
`

const Categoria = (props) => {
    const { titulo } = props;

    return (
        <StyleCategoria>
              <StyleTitulo>
                <StyleH2 titulo={titulo}/>
            </StyleTitulo>
            {/*Renderizado condicional, en la primer linea no se muestra por que esta en el banner
            posible solucion... si es el primer elemnto del array [posicion 0] no se muestra*/ }
            <StyleCarrousel>
           
            </StyleCarrousel>
        </StyleCategoria>
    )
}

export default Categoria