import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About'
import Details from './components/Details/Details'

import styles from './App.module.css'

import {useState} from 'react';
import axios from 'axios';
import {Route, Routes} from 'react-router-dom'
function App() {
   const [characters, setCharacters] = useState([]);
   const onSearch = (id) =>{
      if(!!characters.find((character) => character.id == id))
      return window.alert("Esa Carta ya fue Agregada")
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((characters) => [...characters, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
}
   const onClose = (id) => {
      setCharacters(characters.filter((characters) => characters.id !== id))
   }
   return (
      <div className={styles.app}>
         <Nav onSearch = {onSearch}></Nav>
         <Routes>
         <Route path = '/home' element = {<Cards characters={characters} onClose={onClose}/>}/>
         <Route path = '/about' element ={<About/>}/>
         <Route path = '/detail/:id' element = {<Details/>}/>
         </Routes>
      </div>
   );
}
export default App;