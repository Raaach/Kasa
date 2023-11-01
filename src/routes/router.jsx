import React from 'react'
import {createBrowserRouter, Outlet} from "react-router-dom"
import HomePage from '../pages/HomePage.jsx'
import ApartmentPage from '../pages/ApartmentPage.jsx'
import Footer from "../layout/Footer.jsx"
import Navbar from "../components/Navbar.jsx"
import Main from '../layout/Main.jsx'
import About from '../pages/About.jsx'
import ErrorPage404 from '../pages/ErrorPage404.jsx'

const HeaderFooterLayout =() =>{ //ici nous avons créé un model pour chaque pages, graçe à Outlet
  return<>  
    <Navbar/>
    <Main>
      <Outlet/>
    </Main>
    <Footer/>
  </>
}

export const router = createBrowserRouter([
  {
    element:<HeaderFooterLayout/>,
    errorElement:<ErrorPage404/>,
    children:[
        {
          path:"/",
          element: <HomePage/>
        },
        {
          path:"/flat",
          element:<ApartmentPage/>
          
        },
        {
            path:"/about",
            element:<About/>
          },
        ],
    },
]
)

