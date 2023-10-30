import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import App from '../App.jsx'
import Footer from "../components/Footer.jsx"
import Navbar from "../components/Navbar.jsx";


export const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <App/>,
    },
    {
        path:"/",
        elelement:(
            <>
                <Navbar/>
                <App/>
                <Footer/>
            </>
        ),
    },
    {
        path:"/flat",
        element: (
        <>
            <Navbar/>
            <h1>Nos apartements</h1>
            <Footer/>
        </>
        )
    },
    {
        path:"/about",
        element: (
        <>
            <Navbar/>
            <h1>À propos</h1>
            <Footer/>
        </>
        )
    },
]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
