import styles from './App.module.css'
import Cards from './components/Cards/Cards.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import characters from './data.js';

function App() {
   return (
      <div className={styles.app}>
         <SearchBar onSearch={(characterID) => window.alert(characterID)} />
         <Cards characters={characters}/>
      </div>
   );
}

export default App;