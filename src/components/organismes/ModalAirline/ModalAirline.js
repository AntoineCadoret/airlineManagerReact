import React from "react";
import classes from "./ModalAirline.module.css";
import close from "../../../assets/icons/close.png";

const ModalAirline = ({ airlineName, closeHandler }, props) => {
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
                            defaultValue={  airlineName }
                        />
                    </label>
                </div>
                <footer className="flex justify-center">
                   {/* <Button
                        value={(modifType === "update") ? 'Update' : 'Add'}
                        clickHandle={updateHandle}
                        buttonStyle="w-2/5
                        bg-sky-500
                        rounded
                        m-3
                        p-2
                        text-white
                        self-right
                        hover:bg-sky-700"
                    />
                    {(modifType === "update") ? <Button
                        value='remove'
                        clickHandle={removeHandle}
                        buttonStyle=" w-2/5
                        bg-red-500
                        rounded
                        m-3
                        p-2
                        text-white
                        self-left
                        hover:bg-red-700"
                    /> :''} */}
                </footer>
            </div>
        </>
    );
};

export default ModalAirline;