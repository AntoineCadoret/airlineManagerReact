import React, { useState } from "react";
import PlaneTicket from "../components/molecules/PlaneTicket/PlaneTicket";
import plus from "../assets/icons/plus.png";
import ModalFleet from "../components/organismes/Modals/ModalFleet/ModalFleet";

const Fleet = () =>{
    const [isAdding, setIsAdding] = useState(false);
    const planes =[
        { type: 'A350', totalAmount: 25, inActivity: 15, inOrder: 10, version: '1000' },
        { type: 'B777', totalAmount: 12, inActivity: 10, inOrder: 2, version: '900'},
        { type: 'A380', totalAmount: 10, inActivity: 10, inOrder: 0, version: '800' }
    ];

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
            <div>
                {planes.map(plane => <PlaneTicket plane={plane}/>)}
                <img className="fixed m-3 bottom-0 right-0 w-24 cursor-pointer" src={plus} alt="add" onClick={addModalHandler}/>
            </div>
        </>
        
    );
};

export default Fleet;