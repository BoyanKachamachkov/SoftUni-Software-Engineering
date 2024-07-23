import 'bootstrap/dist/css/bootstrap.min.css';
import ArticleCard from './components/ArticleCard';
import NavBar from './components/NavBar';
import styles from './App.module.css';

function App() {

    return (
        <>
            <NavBar />

            <div className={styles['article-list']}>
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
            </div>
        </ >
    );
}

export default App;
