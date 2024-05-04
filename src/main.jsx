import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import {DataProvider} from "./context/Context.jsx";

const routes=createBrowserRouter([
  {path:"/",element:<App/>},
  {path:"/layout",element:<Layout/>},
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
     <RouterProvider router={routes}/>
     </DataProvider>
    
  </React.StrictMode>,
)
