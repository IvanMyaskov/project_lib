import styles from './App.module.scss';
import Header from './components/Header/Header';
import uc from './underConstruction.jpg' ;
function App() {
  return (
    <div className={styles.App}>
     <Header />
      <img src={uc}></img>
    </div>
  );
}

export default App;
