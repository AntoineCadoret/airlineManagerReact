import a350 from "../../../assets/images/A350.jpeg";
import a380 from "../../../assets/images/A380.jpeg";
import a340 from "../../../assets/images/A340.jpg";
import a330 from "../../../assets/images/A330.jpg";
import a321 from "../../../assets/images/A321.jpg";
import b777 from "../../../assets/images/B777.jpeg";
import b747 from "../../../assets/images/B747.jpg";
import b787 from "../../../assets/images/B787.jpg";
import b767 from "../../../assets/images/B767.JPG";
import b737 from "../../../assets/images/B737.jpg";
import settings from "../../../assets/icons/settings.svg"; 

const PlaneTicket = ({plane, updatePlaneHandler}, props) =>{
    let planePick="";
    switch(plane.model){
        case "A350": planePick=a350;
            break;
        case "A380": planePick=a380;
            break;
        case "A340": planePick=a340;
            break;
        case "A330": planePick=a330;
            break;
        case "A321": planePick=a321;
            break;
        case "B777": planePick=b777;
            break;
        case "B747": planePick=b747;
            break;
        case "B787": planePick=b787;
            break;
        case "B767": planePick=b767;
            break;
        case "B737": planePick=b737;
            break;

    }
    return (
        <div className="flex">
            <img className="w-1/6 m-2 rounded" src={planePick} alt="plane picture"/>
            <h2 className="flex items-center">{plane.model}</h2>
            <button onClick={updatePlaneHandler(plane.id)}><img className="m-3 float-right cursor-pointer" src={settings} alt="plane settings"/></button>
        </div>
    );

}

export default PlaneTicket;