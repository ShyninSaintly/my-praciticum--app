import { Navigate, Route, Routes } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../router/index.jsx';
import { useContext } from 'react';
import { AuthContext } from '../context/index.jsx';
import Loader from './UI/Loader/Loader.jsx';

const AppRouter = () => {
    const { isAuth, setIsAuth, isLoading } = useContext(AuthContext);
    if(isLoading){
        return <Loader />;
    }
    return isAuth ? (
        <Routes>
            {privateRoutes.map((route) => (
                <Route path={route.path} element={route.element} exact={route.exact} key={route.path} />
            ))}
        </Routes>
    ) : (
        <Routes>
            {publicRoutes.map((route) =>
                <Route path={route.path} element={route.element} exact={route.exact} key={route.path} />
            )}
    <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
    );
};
export default AppRouter;
