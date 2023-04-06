import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/molecules/Header/Header";
import Navigation from "../components/molecules/Navigation/Navigation";

function Layout() {

    return (
        <>
            <Navigation/>
            <body className="flex-col w-full">
                <Header />
                <Outlet />
            </body>
        </>
    );
}

export default Layout;