import styles from './projects.module.scss';
import Header from '../components/Header/Header';
import Counter from '../components/Counter/Counter';
import Card from '../components/Cards/project_card';
import { Link } from 'react-router-dom';
function Projects() {
  return (
    <div className={styles.App}>
     <Header />
     <Link to='/projects/counter'>
     <Card />
     </Link>
      {/* <Counter />  */}
    </div>
  );
}

export default Projects;