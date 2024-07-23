import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from 'react-router-dom';

import Article from './components/Article';
import NavBar from './components/NavBar';
import ArticleList from './components/ArticleList';
import ArticleCreate from './components/ArticleCreate';


function App() {

    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={<Navigate to='/articles' />} />
                <Route path='/articles' element={<ArticleList />} />
                <Route path='/articles/:articleId/details' element={<Article />} />
                <Route path='/articles/create' element={<ArticleCreate />} />
            </Routes>
        </ >
    );
}

export default App;
