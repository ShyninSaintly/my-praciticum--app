import './styles/App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './pages/About.jsx';

function App() {
    return (
        <BrowserRouter>
            <Route path="/About">
                <About />
            </Route>
        </BrowserRouter>
    );
}
export default App;
