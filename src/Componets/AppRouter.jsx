import { Route, Routes } from 'react-router-dom';
import { routes } from '../router/routes.js';

const AppRouter = () => {
    return (
        <Routes>
            {routes.map((route) => (
                <Route component={route.component} path={route.path} exact={route.exact} />
            ))}
        </Routes>
    );
};

export default AppRouter;
