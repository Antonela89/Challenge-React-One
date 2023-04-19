import './Carrousel.css';
import Card from '../Card';

const Carrousel = () => {
    return (
        <section className='carrousel'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>

            {/* armar la estructura de carrousel
            cada card debe tener un video distinto, todos de una misma categoria
            logica: 
            quien se encarga de mostrar los videos: las cards
            quien agrupa las cards: el carrousel
            con que criterio: todos pertenecen a la misma categoria
            armar array de objetos donde  cada objeto esta formado por :
            categoria, color de categoria, descripcion de categoria y otro array con link video y categoria
              */}
        </section>
    )
}

export default Carrousel

