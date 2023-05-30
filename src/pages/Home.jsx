import { useEffect, useState } from 'react';
import { buscar } from '../api/api';
import Banner from '../components/Home/Banner';
import Carrusel from '../components/Home/Carrousel';

const Home = () => {
  const [categorias,setCategorias] = useState([]);

  useEffect(()=> {
  buscar('/categorias', (response) => {
    setCategorias(response)}, [])})

    return (
      <>
        <Banner />        
        {categorias.map((categoria) => <Carrusel key={categoria.id} categoria={categoria}/>)}
      </>
    )
}

export default Home