import { Link } from 'react-router-dom';
import MyButton from '../button/MyButton.jsx';
import { useContext } from 'react';
import { AuthContext } from '../../../context/index.jsx';

const Navbar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
   const logout=()=>{
    setIsAuth(false);
    localStorage.removeItem('auth');
   };
    return (
        <div className="navbar">
            <MyButton onClick={logout}></MyButton>
            <div className="navbar__links">
                <Link to="about">about us</Link>
                <Link to="posts">posts</Link>
            </div>
        </div>
    );
};

export default Navbar;
