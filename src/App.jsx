import './styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Componets/UI/Navbar/Navbar.jsx';
import AppRouter from './Componets/AppRouter.jsx';

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <AppRouter />
            </BrowserRouter>
        </>
    );
}

export default App;
