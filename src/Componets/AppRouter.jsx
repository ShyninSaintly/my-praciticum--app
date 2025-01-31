import { Navigate, Route, Routes } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../router/index.jsx';
import { useContext } from 'react';

const AppRouter = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    console.log(isAuth);
    return isAuth ? (
        <Routes>
            {privateRoutes.map((route) => (
                <Route path={route.path} element={route.element} exact={route.exact} />
            ))}
        </Routes>
    ) : (
        <Routes>
            {publicRoutes.map((route) => (
                <Route path={route.path} element={route.element} exact={route.exact} />
            ))}
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
};
export default AppRouter;
