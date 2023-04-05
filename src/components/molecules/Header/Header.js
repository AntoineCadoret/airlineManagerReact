
import React, { useState } from "react";
import settings from "../../../assets/icons/settings.svg";
import ModalAirline from "../../organismes/ModalAirline/ModalAirline";

function Header({title},props) {
    const [isAdding, setIsAdding] = useState(false);

    const addModalHandler = () => {
        setIsAdding(true);  
    };
    
    const closeModalHandler = () => {
        setIsAdding(false);
    };

    return (
        <>
            {isAdding && <ModalAirline
                airlineName="test airline"
                closeHandler={closeModalHandler}
            />}
            <header className="flex justify-between bg-sky-100">
                <div className="text-center w-full">
                    <h1 className="text-3xl text-sky-500 font-bold">Airline Manager</h1>
                    <h2 className="text-2xl">Your airline</h2>
                    <h3 className="text-xl">{title}</h3>
                </div>
                <button onClick={addModalHandler}><img className="m-4 w-10" src={settings}/></button>
                
            </header>
        </>
    );
}

export default Header;