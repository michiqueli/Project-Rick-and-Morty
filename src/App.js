import styles from './App.module.css'
import Cards from './components/Cards/Cards.jsx';
import characters from './data.js';
import Nav from './components/Nav/nav.jsx';

function App() {
   return (
      <div className={styles.app}>
         <Nav></Nav>
         <Cards characters={characters}/>
      </div>
   );
}
export default App;