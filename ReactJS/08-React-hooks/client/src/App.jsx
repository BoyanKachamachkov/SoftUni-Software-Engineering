import { useFetch } from './hooks/useFetch';

import 'bootstrap/dist/css/bootstrap.min.css';
import ArticleCard from './components/ArticleCard';
import NavBar from './components/NavBar';
import styles from './App.module.css';
import SpinnerComponent from './components/SpinnerComponent';

function App() {

    const { data: articles, isFetching } = useFetch('http://localhost:3030/jsonstore/advanced/articles/list', []);

    return (
        <>
            <NavBar />

            {isFetching > 0
                ? <SpinnerComponent />
                : (<div className={styles['article-list']}>
                    {articles.map(article => <ArticleCard key={article._id} {...article} />)}
                </div>
                )
            }

        </ >
    );
}

export default App;
