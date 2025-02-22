import About from '../pages/About.jsx';
import Posts from '../pages/Posts.jsx';
import PostIdPage from '../pages/PostIdPage.jsx';
import Login from '../pages/Login.jsx';
import ErrorPage from '../pages/ErrorPage.jsx';

export const privateRoutes = [
    { path: '/about', element: <About />, exact: true },
    { path: '/posts', element: <Posts />, exact: true },
    { path: '/posts/:id', element: <PostIdPage />, exact: true },
    { path: '/', element: <Posts />, exact: true },
    { path: '*', element: <ErrorPage />, exact: true },
];
export const publicRoutes = [{ path:'/login', element: <Login/>, exact: true }];
