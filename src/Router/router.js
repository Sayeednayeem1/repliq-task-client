import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import ProductLists from "../Pages/Home/ProductLists/ProductLists";


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
            }
        ]
    }
])