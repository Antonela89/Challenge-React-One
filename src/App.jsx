import './App.css';
import Banner from './components/Banner'
import Categoria from './components/Categoria';
import Footer from './components/Footer';
import  Header from './components/Header';

function App() {

  return (
    <div className="App">
      <Header />
      <Banner />
      {/*Renderizado condicinal segun cantidad de categorias que hay en array*/ }
      <Categoria/>
      <Categoria/>
      <Categoria/>
      <Footer/>   
    </div>
  )
}

export default App
