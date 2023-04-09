import { createBrowserRouter } from "react-router-dom";
import CustomerList from "../DashBoard/CustomerList/CustomerList";
import DashBoard from "../DashBoard/DashBoard/DashBoard";
import DashBoardLayout from "../layout/DashBoardLayout";
import Main from "../layout/Main";
import Login from "../Login/Login";
import Home from "../Pages/Home/Home/Home";
import ProductLists from "../Pages/Home/ProductLists/ProductLists";
import Register from "../Regster/Register";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/productList',
                element: <ProductLists></ProductLists>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ],
    },
    {
        path: '/dashboard',
        element: <DashBoardLayout></DashBoardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <CustomerList></CustomerList>
            },
        ]
    }
])