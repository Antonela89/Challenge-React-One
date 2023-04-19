import './Boton.css';

const Boton = (props) => {

    const { contenido } = props;
    return (
        <boton className="boton">
            {contenido}
        </boton>
    )
}

export default Boton