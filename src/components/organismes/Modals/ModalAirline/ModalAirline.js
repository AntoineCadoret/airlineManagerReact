import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import classes from "../Modal.module.css";
import close from "../../../../assets/icons/close.png";
import { airlineNameAction } from "../../../../store/store";

const ModalAirline = ({ airlineName, closeHandler }, props) => {
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
                    <h2>Update your airline</h2>
                    <button
                        onClick={closeHandler}
                        className='self-right w-1/12'><img className="w-1/2" src={close} alt="close modal"/></button>
                </header>
                <div className={classes.content}>
                    <label>
                        Airline Name :
                        <input
                            type="text"
                            name="airlineName"
                            className="airlineName border rounded m-2"
                            defaultValue={  name }
                        />
                    </label>
                </div>
                <footer className="flex justify-center">
                   <button className="bg-sky-500 rounded text-white p-2 m-2" onClick={modifNameHandler}>Save</button>
                </footer>
            </div>
        </>
    );
};

export default ModalAirline;