import React, {useState}  from "react";
import { NavLink } from "react-router-dom";
import close from "../../../assets/icons/close.png";
import home from "../../../assets/icons/home.png";
import plane from "../../../assets/icons/plane.png";
import route from "../../../assets/icons/flight-route.png";
import schedule from "../../../assets/icons/schedule.png";
import menu from "../../../assets/icons/menu.png";

const  Navigation = ({ handleSize }, props) => {
    const [isOpen, setIsOpen] = useState(false);

    const styleLink = (actif) => {
        let style = "flex items-center pl-2 py-2 mt-2 hover:bg-sky-500/25 hover:text-white active:bg-sky-500/50 active:text-white";
        if (actif) {
            style = 'bg-sky-500/75 text-white ' + style;
            console.log(style);
        }
        return style;
    };
    const openMenu = () =>{
        if(!isOpen){
            handleSize('10rem');
        } else {
            handleSize('5rem');
        }
        setIsOpen(!isOpen);
        
    };

    return(
        <nav className={isOpen ? 'fixed flex flex-col bg-sky-100 w-40 h-full':'fixed flex flex-col bg-sky-100 w-20 h-full'}>
            <button onClick={openMenu} style={{ height: '96px' }}><img className={isOpen ? "mx-2 my-2 w-1/5": "mx-2 my-2 w-6"} src={isOpen? close : menu } alt="close menu"/></button>
            <NavLink
                className={({isActive})=>styleLink(isActive)}
                to="/"
                end>
                <img className={isOpen ? "mx-2 my-2 w-6": "mx-2 my-2 w-6"} src={home} alt="home menu"/>
                {isOpen?'Home':''}
            </NavLink>
            <NavLink
                className={({isActive})=>styleLink(isActive)}
                to="/Fleet"
                end
            >
                <img className={isOpen ? "mx-2 my-2 w-6": "mx-2 my-2 w-6"} src={plane} alt="plane menu"/>
                {isOpen?'Fleet':''}
            </NavLink>
            <NavLink
                className={({isActive})=>styleLink(isActive)}
                to="/Destinations"
                end
            >
                <img className={isOpen ? "mx-2 my-2 w-6": "mx-2 my-2 w-6"} src={route} alt="route menu"/>
                {isOpen?'Destinations':''}
            </NavLink>
            <NavLink
                className={({isActive})=>styleLink(isActive)}
                to="/Schedule"
                end
            >
                <img className={isOpen ? "mx-2 my-2 w-6": "mx-2 my-2 w-6"} src={schedule} alt="schedule menu"/>
                {isOpen?'Schedule':''}
            </NavLink>
        </nav>
    );
};

export default Navigation;