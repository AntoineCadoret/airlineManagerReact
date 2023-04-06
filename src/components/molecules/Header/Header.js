
import React, { useState } from "react";
import { useSelector } from "react-redux";
import settings from "../../../assets/icons/settings.svg";
import ModalAirline from "../../organismes/Modals/ModalAirline/ModalAirline";

function Header() {
    const [isAdding, setIsAdding] = useState(false);
    const name = useSelector(state => state.airlineName.airlineName);

    const addModalHandler = () => {
        setIsAdding(true);  
    };
    
    const closeModalHandler = () => {
        setIsAdding(false);
    };

    return (
        <>
            {isAdding && <ModalAirline
                closeHandler={closeModalHandler}
            />}
            <header className="fixed flex justify-between bg-sky-100 w-full">
                <div className="text-center w-full">
                    <h1 className="text-3xl text-sky-500 font-bold">Airline Manager</h1>
                    <h2 className="text-2xl">{name}</h2>
                </div>
                <button onClick={addModalHandler}><img className="m-4 w-10" src={settings}/></button>
                
            </header>
        </>
    );
}

export default Header;