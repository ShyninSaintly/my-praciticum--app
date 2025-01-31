import { Navigate, Route, Routes } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../router/index.jsx';
import { useContext } from 'react';
import { AuthContext } from '../context/index.jsx';
import { useNavigate } from 'react-router-dom';

const AppRouter = () => {
    const { isAuth, setIsAuth,isLoadfing } = useContext(AuthContext);
    if(isLoadfing){
        return <Loader />;
    }
const navigate=useNavigate();
    return isAuth ? (
        <Routes>
            {privateRoutes.map((route) => (
                <Route path={route.path} element={route.element} exact={route.exact} key={route.path} />
            ))}
        </Routes>
    ) : (
        <Routes>
            {publicRoutes.map((route) => (
                <Route path={route.path} element={route.element} exact={route.exact} key={route.path} />
            ))}
    <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
    );
};
export default AppRouter;
