import About from '../pages/About.jsx';
import Posts from '../pages/Posts.jsx';
import PostIdPage from '../pages/PostIdPage.jsx';
import ErrorPage from '../pages/ErrorPage.jsx';

export const routes = [
    { path: '/about', component: About, exact: true },
    { path: '/posts', component: Posts, exact: true },
    { path: '/posts/:id', component: PostIdPage, exact: true },
    { path: '/error', component: ErrorPage, exact: true },
    { path: '/*', component: ErrorPage, exact: true },
];
