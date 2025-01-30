import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__links">
                <Link to="about">about us</Link>
                <Link to="posts">posts</Link>
            </div>
        </div>
    );
};

export default Navbar;
