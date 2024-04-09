import styles from './projects.module.scss';
import Header from '../components/Header/Header';
import Counter from '../components/Counter/Counter';
function Projects() {
  return (
    <div className={styles.App}>
     <Header />
     <Counter />
    </div>
  );
}

export default Projects;