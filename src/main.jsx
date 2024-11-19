import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import DashBoard from './Components/DashBoard/DashBoard';
import Statistics from './Components/Statistics/statistics';
import ProductCards from './Components/ProductCards/ProductCards';
import CardDetails from './Components/CardDetails/CardDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: '/',
            element: <ProductCards />,
            loader: () => fetch('../ProductsData.json'),
          },
          {
            path: 'category/:category',
            element: <ProductCards />,
            loader: () => fetch('../ProductsData.json'),
          }
        ],
      },
      {
        path: "dashboard",
        element: <DashBoard/>
        
      },
      {
        path: "statistics",
        element: <Statistics/>,
        loader: () => fetch('../ProductsData.json')
      },
      {
        path: "/card/:product_id",
        element: <CardDetails/>,
        loader: () => fetch('../ProductsData.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
