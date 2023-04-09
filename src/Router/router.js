import { createBrowserRouter } from "react-router-dom";
import CustomerList from "../DashBoard/CustomerList/CustomerList";
import OrderList from "../DashBoard/OrderList/OrderList";
import ProductsListDashboard from "../DashBoard/ProductsListDashboard/ProductsListDashboard";
import UsersList from "../DashBoard/UsersList/UsersList";
import DashBoardLayout from "../layout/DashBoardLayout";
import Main from "../layout/Main";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import Home from "../Pages/Home/Home/Home";
import ProductLists from "../Pages/Home/ProductLists/ProductLists";
import Register from "../Regster/Register";
import PrivateRoute from "./PrivateRoute";


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
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <CustomerList></CustomerList>
            },
            {
                path: '/dashboard/productsListDashboard',
                element: <ProductsListDashboard></ProductsListDashboard>
            },
            {
                path: '/dashboard/ordersList',
                element: <OrderList></OrderList>
            },
            {
                path: '/dashboard/usersList',
                element: <UsersList></UsersList>
            }
        ]
    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
    }
])