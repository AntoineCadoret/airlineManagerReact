import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import classes from "../Modal.module.css";
import close from "../../../../assets/icons/close.png";
import { fleetAction } from "../../../../store/store";

const ModalFleet = ({ closeHandler, mode }, props) => {

    const fleet = useSelector(state => state.fleet.fleet);
    let airplane = {};
    const airplaneType = {
        'A350': ['900', '1000'],
        'A380': ['800','F'],
        'A340': ['200', '300', '500', '600'],
        'A330': ['200', '300', '800', '900'],
        'A321': ['XLR','NEO','CEO'],
        'B747': ['SP','400','8'],
        'B787': ['8','9','10'],
        'B777': ['200','300','8','9'],
        'B767': ['200','300','400'],
        'B737':['100','200','300','400','500','600','700','800', '900', 'MAX 8', 'MAX 9']
    };

    if(mode !== "add"){
        airplane = fleet[mode];
    }
    
    const [model, setModel] = useState(airplane.model ? airplane.model: "");
    const [totalAmount, setTotalAmount] = useState(airplane.totalAmount ? airplane.totalAmount : 0);

    const dispatch = useDispatch();
    const addAirplane = () => {
        const model = document.querySelector(".airplaneModel").value;
        const type = document.querySelector(".airplaneType").value;
        const fleetAmount = document.querySelector(".fleetAmount").value;
        const orderAmount = document.querySelector(".orderAmount").value;
        const fleetId = fleet.length;

        const arrNewPlane = {
            id: fleetId,
            model: model,
            type: type,
            fleetAmount: fleetAmount,
            orderAmount: orderAmount,
            totalAmount: totalAmount
        };
        dispatch(fleetAction.addAirplane(arrNewPlane));
        closeHandler();
    };
    
    const adjustTotalAmount = () => {
        const fleetAmount = parseInt(document.querySelector('.fleetAmount').value);
        const orderAmount = parseInt(document.querySelector('.orderAmount').value);
        setTotalAmount(fleetAmount+orderAmount);
    };
    
    return (
        <>
            <div className={classes.backdrop} onClick={closeHandler} />
            <div className={classes.modal}>
                <header className={classes.header}>
                    <h2>{mode ==='add'?'Add a new plane':'update your '+airplane.model+'-'+airplane.type+' model'}</h2>
                    <button
                        onClick={closeHandler}
                        className='self-right w-1/12'><img className="w-1/2" src={close} alt="close modal"/></button>
                </header>
                <div className={classes.content}>
                    <label className="my-2">
                        Airplane model :
                        <select name="airplaneModel" className='airplaneModel mx-1' defaultValue={mode === 'add'?'default':airplane.model} onChange={event=>setModel(event.target.value)}>
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
                        <select name="airplaneType" className='airplaneType mx-1' defaultValue={mode==='add'?'default':airplane.type}>
                                <option value='default'>choose a airplane type</option>
                                {airplaneType[model]?airplaneType[model].map((type, index) => <option value={type} key={index}>{type}</option>):''}
                        </select>
                    </label>
                    <label className="my-2">
                        Amount in your fleet:
                        <input
                            type="text"
                            name="fleetAmount"
                            className="fleetAmount border rounded m-2"
                            onChange={adjustTotalAmount}
                            defaultValue={airplane.fleetAmount}
                        />
                    </label>
                    <label className="my-2">
                        Amount in order:
                        <input
                            type="text"
                            name="orderAmount"
                            className="orderAmount border rounded m-2"
                            onChange={adjustTotalAmount}
                            defaultValue={airplane.orderAmount}
                        />
                    </label>
                    <p>
                        Total quantity:  {totalAmount} 
                    </p>
                </div>
                <footer className="flex justify-center">
                   <button className="bg-sky-500 rounded text-white p-2 m-2" onClick={addAirplane}>Save</button>
                </footer>
            </div>
        </>
    );
};

export default ModalFleet;