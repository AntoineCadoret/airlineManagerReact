import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/molecules/Header/Header";
import Navigation from "../components/molecules/Navigation/Navigation";

function Layout() {
    const [style, setStyle] = useState({padding:"5rem 5rem"});

    const handleSize = (navSize) => {
        const newStyle = {padding: "5rem "+navSize};
        setStyle(newStyle);
    };
    return (
        <>
            <Header />
            <Navigation className="navComponent" handleSize={handleSize}/>
            <Outlet context={style}/>
            
        </>
    );
}

export default Layout;