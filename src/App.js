import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import styles from './App.module.css'
import characters from './data.js';

function App() {
   return (
      <div className={styles.app}>
         <Nav></Nav>
         <Cards characters={characters}/>
      </div>
   );
}
export default App;