import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from 'react-router-dom';

import UserContext from './contexts/UserContext';

import Article from './components/Article';
import NavBar from './components/NavBar';
import ArticleList from './components/ArticleList';
import ArticleCreate from './components/ArticleCreate';
import { useState } from 'react';
import FakeLogin from './components/FakeLogin';


function App() {
    const [currentUser, setCurrentUser] = useState({});
    const login = (username, password) => {
        // TODO: validate pw

        setCurrentUser({ username });
    };

    return (
        // 3. surround that part of the app that should have access to context
        <UserContext.Provider value={{ user: currentUser, login }}>
            <NavBar />
            <Routes>
                <Route path='/' element={<Navigate to='/articles' />} />
                <Route path='/articles' element={<ArticleList />} />
                <Route path='/articles/:articleId/details' element={<Article />} />
                <Route path='/articles/create' element={<ArticleCreate />} />
                <Route path='/fake-login' element={<FakeLogin />} />
            </Routes>
        </UserContext.Provider >
    );
}

export default App;
