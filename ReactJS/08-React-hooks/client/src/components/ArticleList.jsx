import { useFetch } from '../hooks/useFetch';
import Button from 'react-bootstrap/Button';
import ArticleCard from './ArticleCard';
import SpinnerComponent from './SpinnerComponent';
import styles from '../App.module.css';

const ArticleList = () => {

    const {
        data: articles,
        isFetching,
        refetch } = useFetch('http://localhost:3030/jsonstore/advanced/articles/details', []);


    return (
        <>
            {isFetching > 0
                ? <SpinnerComponent />
                : (<div className={styles['article-list']}>
                    {Object.values(articles).map(article => <ArticleCard key={article._id} {...article} />)}
                </div>
                )
            }
            <Button variant="primary" onClick={() => refetch()}>Refresh</Button>{' '}
        </>
    );
};
export default ArticleList;