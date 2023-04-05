import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/molecules/Header/Header";
import Navigation from "../components/molecules/Navigation/Navigation";
import ModalAirline from "../components/organismes/ModalAirline/ModalAirline";

function Layout() {
    
    const location = useLocation();

    let pageTitle = '';
    switch(location.pathname){
        default : pageTitle = 'Home';
                break;
        case '/Fleet' : pageTitle = 'Fleet';
                break;
        case '/Destinations' : pageTitle = 'Destinations';
                break;
        case '/Schedule' : pageTitle = 'Schedule';
                break;
    }
    return (
        <>
            <Navigation/>
            <body className="flex-col w-full">
                <Header title={pageTitle}/>
                <Outlet />
            </body>
        </>
    );
}

export default Layout;