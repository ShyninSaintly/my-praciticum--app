import './styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Componets/UI/Navbar/Navbar.jsx';
import AppRouter from './Componets/AppRouter.jsx';
import { AuthContext } from './context/index.jsx';
import { useEffect, useState } from 'react';

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const[isLoading, setLoading] = useState(true)
    useEffect(() =>{
        if(localStorage.getItem('auth')){
            setIsAuth(true);
        }
        setLoading(false);
    },[])
    return (
        <>
            <AuthContext.Provider value={{ isAuth, setIsAuth,isLoading}}>
                <BrowserRouter>
                    <Navbar />
                    <AppRouter />
                </BrowserRouter>
            </AuthContext.Provider>
        </>
    );
}

export default App;
