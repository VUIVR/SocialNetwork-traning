import About from "../pages/About";
import EmptyPage from "../pages/EmptyPage";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import SinglePost from '../pages/SinglePost'


export const privatRouters = [
    { path: '/', component: <Posts /> },
    { path: '/About', component: <About /> },
    { path: '/Posts', component: <Posts /> },
    { path: '/Posts/:id', component: <SinglePost /> },
    { path: '*', component: <EmptyPage /> }
]

export const publicRouters = [
    { path: '/', component: <Login /> },
    { path: '/About', component: <About /> },
    { path: '*', component: <Login /> }
]