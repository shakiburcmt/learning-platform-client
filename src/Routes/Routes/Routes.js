import { createBrowserRouter, Link } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import CheckOut from "../../components/CheckOut/CheckOut";
import CourseDetails from "../../components/CourseDetails/CourseDetails";
import Courses from "../../components/Courses/Courses";
import FAQ from "../../components/FAQ/FAQ";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login/Login";
import Register from "../../components/Login/Register/Register";
import Main from "../../layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: < Main ></Main >,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/courses',
                loader: () => fetch('https://b610-learning-platform-server-side.vercel.app/courses'),
                element: <Courses></Courses>
            },
            {
                path: '/details/:id',
                loader: ({params})=>fetch(`https://b610-learning-platform-server-side.vercel.app/courses/${params.id}`),
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/checkout/:id',
                loader: ({params})=>fetch(`https://b610-learning-platform-server-side.vercel.app/checkout/${params.id}`),
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            },
        ]
    },
    {
        path: '*',
        element: <h3>404! Not Found<br />Go <Link to='/'>home</Link></h3>
    }
])