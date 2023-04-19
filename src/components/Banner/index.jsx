import Card from '../Card';
import CategoriaTitulo from '../CategoriaTitulo';
import './Banner.css';

const Banner = () => {

    return (
        <div className="banner">
            <div className='background'>

            </div>
            <div className='contenido'>
                <div className='texto'>
                    <CategoriaTitulo titulo="Front End"/>
                    { /*Renderizado condicinal, se va a mostrar el titulo y descripcion del primer elemento del array*/ }
                    <h3>Challenge React</h3>
                    <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
                </div>
                <Card/>
            </div>
        </div>
    )
}

export default Banner