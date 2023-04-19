import './Categoria-Titulo.css';

const CategoriaTitulo = (props) => {
    
    const { titulo } = props;

    return (
        <div className="titulo">
            <h2>{titulo}</h2>
        </div>
    )
}

export default CategoriaTitulo