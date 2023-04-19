import './Categoria.css';
import Carrousel from '../Carrousel';
// import CategoriaTitulo from '../CategoriaTitulo';

const Categoria = () => {
    return (
        <div className="categoria">
            {/* <CategoriaTitulo />  
            Renderizado condicional, en la primer linea no se muestra por que esta en el banner
            posible solucion... si es el primer elemnto del array [posicion 0] no se muestra*/ }
            <Carrousel/>
        </div>
    )
}

export default Categoria