import React, { useState } from "react";
import { useSelector } from 'react-redux';
import PlaneTicket from "../components/molecules/PlaneTicket/PlaneTicket";
import plus from "../assets/icons/plus.png";
import ModalFleet from "../components/organismes/Modals/ModalFleet/ModalFleet";

const Fleet = () =>{
    const [isAdding, setIsAdding] = useState(false);
    const fleet = useSelector(state => state.fleet.fleet);

    const addModalHandler = () => {
        setIsAdding(true);  
    };
    
    const closeModalHandler = () => {
        setIsAdding(false);
    };
    
    return(
        <>
            {isAdding && <ModalFleet
                closeHandler={closeModalHandler}
            />}
            <div className="mx-6 my-4">
                {fleet.map(plane => <PlaneTicket plane={plane} updatePlaneHandler={updatePlane(id)} />)}
                <img className="fixed m-3 bottom-0 right-0 w-24 cursor-pointer" src={plus} alt="add" onClick={addModalHandler}/>
            </div>
        </>
        
    );
};

export default Fleet;