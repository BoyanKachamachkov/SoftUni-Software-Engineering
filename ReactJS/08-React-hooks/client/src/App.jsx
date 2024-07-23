import 'bootstrap/dist/css/bootstrap.min.css';
import ArticleCard from './components/ArticleCard';
import NavBar from './components/NavBar';
import styles from './App.module.css';
import { useEffect, useState } from 'react';

function App() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch(`http://localhost:3030/jsonstore/advanced/articles/list`);
            const result = await response.json();

            setArticles(result);
        })();
    }, []);

    console.log(articles);

    return (
        <>
            <NavBar />

            <div className={styles['article-list']}>
                {articles.map(article => <ArticleCard key={article._id} {...article} />)}
            </div>
        </ >
    );
}

export default App;
