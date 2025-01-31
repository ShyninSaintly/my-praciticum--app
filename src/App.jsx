import './styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Componets/UI/Navbar/Navbar.jsx';
import AppRouter from './Componets/AppRouter.jsx';
import PostIdPage from './pages/PostIdPage.jsx';
import { AuthContext } from './context/index.jsx';
import { useState } from 'react';

function App() {
    const [isAuth, setIsAuth] = useState(false);
    return (
        <>
            <AuthContext.Provider value={{ isAuth, setIsAuth }}>
                <BrowserRouter>
                    <Navbar />
                    <PostIdPage />
                    <AppRouter />
                </BrowserRouter>
            </AuthContext.Provider>
        </>
    );
}

export default App;
