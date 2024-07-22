import styles from './projects.module.scss';
import Header from '../components/Header/Header';
import Card from '../components/Cards/project_card';
import { Link } from 'react-router-dom';
import counterImg from './counter.png'
function Projects() {
  return (
    <div className={styles.App}>
     <Header />
     <Link to='/projects/counter' style={{ textDecoration: 'none' }}>
     <Card  text='Counter' img={counterImg} />
     </Link>
    </div>
  );
}

export default Projects;