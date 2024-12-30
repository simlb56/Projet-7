import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "../Pages/Homepage";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import Main from "../layout/Main";
import ApartmentPage from "../Pages/ApartmentPage";
import About from "../Pages/APropos";
import { ErrorPageNotFound } from "../Pages/ErrorPageNotFound";

const HeaderFooterLayout = () => {
    return <>
    <Navbar />
    <Main>
    <Outlet />
    </Main>
    <Footer />
    </>
}

export const router = createBrowserRouter([
    {
        
        element:
           <HeaderFooterLayout />,
            errorElement:  <ErrorPageNotFound />,
            
           children: [{
            
                path: "/",
                element: <HomePage />, 
            },
            {
            path: "accueil",
            element: <HomePage />
           },
           {
            path: "/apartmentPage",
             element:<ApartmentPage /> 
        },
        {
            path: "/apropos",
            element:<About />
        }
        ]
        
    }
    
]);