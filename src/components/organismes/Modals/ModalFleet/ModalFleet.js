import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import classes from "../Modal.module.css";
import close from "../../../../assets/icons/close.png";
import { airlineNameAction } from "../../../../store/store";

const ModalFleet = ({ closeHandler }, props) => {
    const [types, setTypes] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const name = useSelector(state => state.airlineName.airlineName);
    const dispatch = useDispatch();
    const modifNameHandler = () => {
        const newName = document.querySelector(".airlineName").value;
        dispatch(airlineNameAction.updateAirlineName(newName));
        closeHandler();
    };
    const modifAirplaneType = () => {
        const chosenModel = document.querySelector(".airplaneModel").value;
        
        switch(chosenModel){
            default : setTypes([]);
                break;
            case 'A350' : setTypes(['900','1000']);
                break;
            case 'A380' : setTypes(['800','F']);
                break;
            case 'A340' : setTypes(['200', '300', '500', '600']);
                break;
            case 'A330' : setTypes(['200', '300', '800', '900']);
                break;
            case 'A321' : setTypes(['XLR','NEO','CEO']);
                break;
            case 'B747' : setTypes(['SP','400','8']);
                break;
            case 'B787' : setTypes(['8','9','10']);
                break;
            case 'B777' : setTypes(['200','300','8','9']);
                break;
            case 'B767' : setTypes(['200','300','400']);
                break;
            case 'B737' : setTypes(['100','200','300','400','500','600','700','800', '900', 'MAX 8', 'MAX 9']);
                break;
        }
    };
    const adjustTotalAmount = () => {
        const fleetAmount = parseInt(document.querySelector('.fleetAmount').value);
        const orderAmount = parseInt(document.querySelector('.orderAmount').value);
        setTotalAmount(fleetAmount+orderAmount);
    }
    return (
        <>
            <div className={classes.backdrop} onClick={closeHandler} />
            <div className={classes.modal}>
                <header className={classes.header}>
                    <h2>Add a new plane</h2>
                    <button
                        onClick={closeHandler}
                        className='self-right w-1/12'><img className="w-1/2" src={close} alt="close modal"/></button>
                </header>
                <div className={classes.content}>
                    <label className="my-2">
                        Airplane model :
                        <select name="airplaneModel" className='airplaneModel mx-1' defaultValue='default' onChange={modifAirplaneType}>
                                <option value='default'>choose a airplane model</option>
                                <option value='A350'>A350</option>
                                <option value='A380'>A380</option>
                                <option value='A340'>A340</option>
                                <option value='A330'>A330</option>
                                <option value='A321'>A321</option>
                                <option value='B747'>B747</option>
                                <option value='B787'>B787</option>
                                <option value='B777'>B777</option>
                                <option value='B767'>B767</option>
                                <option value='B737'>B737</option>
                        </select>
                    </label>
                    <label className="my-2">
                        Airplane type :
                        <select name="airplaneType" className='airplaneType mx-1' defaultValue='default'>
                                <option value='default'>choose a airplane type</option>
                                {types.map(type => <option value={type}>{type}</option>)}
                        </select>
                    </label>
                    <label className="my-2">
                        Quantity in your fleet:
                        <input
                            type="text"
                            name="fleetAmount"
                            className="fleetAmount border rounded m-2"
                            onChange={adjustTotalAmount}
                            defaultValue={0}
                        />
                    </label>
                    <label className="my-2">
                        Quantity in order:
                        <input
                            type="text"
                            name="orderAmount"
                            className="orderAmount border rounded m-2"
                            onChange={adjustTotalAmount}
                            defaultValue={0}
                        />
                    </label>
                    <p>
                        Total quantity:  {totalAmount} 
                    </p>
                </div>
                <footer className="flex justify-center">
                   <button className="bg-sky-500 rounded text-white p-2 m-2" onClick={modifNameHandler}>Save</button>
                </footer>
            </div>
        </>
    );
};

export default ModalFleet;