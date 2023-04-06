import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { useOutletContext } from "react-router-dom";
import PlaneTicket from "../components/molecules/PlaneTicket/PlaneTicket";
import plus from "../assets/icons/plus.png";
import ModalFleet from "../components/organismes/Modals/ModalFleet/ModalFleet";

const Fleet = () =>{
    const [isAdding, setIsAdding] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const fleet = useSelector(state => state.fleet.fleet);
    const styleToAdd = useOutletContext()

    const addModalHandler = () => {
        setIsAdding(true);  
    };
    
    const closeModalHandler = () => {
        setIsAdding(false);
    };
    const updatePlane = (id) => {
        console.log(id);
    };

    console.log('fleet', styleToAdd);

    return(
        <>
            {isAdding && <ModalFleet
                closeHandler={closeModalHandler}
            />}
            <div style={styleToAdd} className="mx-6 my-4">
                {fleet.map(plane => <PlaneTicket plane={plane} updatePlaneHandler={updatePlane} />)}
                <img className="fixed m-3 bottom-0 right-0 w-24 cursor-pointer" src={plus} alt="add" onClick={addModalHandler}/>
            </div>
        </>
        
    );
};

export default Fleet;