import { Route, Routes } from 'react-router-dom';
import About from '../pages/About.jsx';
import Posts from '../pages/Posts.jsx';
import Error from '../pages/Error.jsx';

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="about" element={<About />}></Route>
                <Route path="posts" element={<Posts />}></Route>
                <Route path="error" element={<Error />}></Route>
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    );
};

export default AppRouter;
