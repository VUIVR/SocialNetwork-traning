import About from "../pages/About";
import EmptyPage from "../pages/EmptyPage";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import SinglePost from '../pages/SinglePost'


const RoutersUrl = [
    {path: '/About', component:<About/>},
    {path: '/Posts', component:<Posts/>},
    {path: '/Posts/:id', component:<SinglePost/>},
    {path: '/Login', component:<Login/>},
    {path: '*', component:<EmptyPage/>}
]

export default RoutersUrl