import React from 'react'
import {createBrowserRouter, Outlet} from "react-router-dom"
import HomePage from '../HomePage.jsx'
import Footer from "../layout/Footer.jsx"
import Navbar from "../components/Navbar.jsx";
import Main from '../layout/Main.jsx';

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
    errorElement:<h1>404 not found</h1>,
    children:[
        {
          path:"/",
          element: <HomePage/>
        },
        {
          path:"/flat",
          element:<h1>Nos apartements</h1>
          
        },
        {
            path:"/about",
            element:<h1>À propos</h1>
          },
        ],
    },
]
)

