import { useEffect, useState } from 'react';
import { buscar } from '../api/api';
import Banner from '../components/Banner';
import Categoria from '../components/Categoria';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home = () => {
  const [categorias,setCategorias] = useState([]);

  useEffect(()=> {
  buscar('/categorias', (response) => {
    setCategorias(response)});
  }, [])

    return (
      <div className="App">
        <Header />
        <Banner />
        {/*Renderizado condicinal segun cantidad de categorias que hay en array*/ }
        {
          categorias.map((categoria) => {console.log(categoria.id, categoria.url)})
        }

        {categorias.map((categoria) => {<Categoria titulo={categoria.id}/>})}
        <Footer/>   
    </div>
    )
}

export default Home