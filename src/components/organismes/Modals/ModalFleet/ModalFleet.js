import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import classes from "../Modal.module.css";
import close from "../../../../assets/icons/close.png";
import { airlineNameAction } from "../../../../store/store";
import { useState } from 'react';

const ModalFleet = ({ closeHandler }, props) => {
    const name = useSelector(state => state.airlineName.airlineName);
    const dispatch = useDispatch();
    const modifNameHandler = () => {
        const newName = document.querySelector(".airlineName").value;
        dispatch(airlineNameAction.updateAirlineName(newName));
        closeHandler();
    };

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
                    <label>
                        Airplane model :
                        <select name="airplaneModel" className='airplaneModel' defaultValue='default'>
                                <option value='default'>choose a airplane model</option>
                                <option value='A350'>A350</option>
                                <option value='A380'>A380</option>
                                <option value='A340'>A340</option>
                                <option value='A330'>A330</option>
                                <option value='A321'>A321</option>
                                <option value='B747'>B747</option>
                                <option value='B777'>B777</option>
                                <option value='B787'>B787</option>
                                <option value='B737'>B737</option>
                        </select>
                    </label>
                </div>
                <footer className="flex justify-center">
                   <button className="bg-sky-500 rounded text-white p-2 m-2" onClick={modifNameHandler}>Save</button>
                </footer>
            </div>
        </>
    );
};

export default ModalFleet;