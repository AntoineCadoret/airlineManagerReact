import a350 from "../../../assets/images/A350.jpeg";
import a380 from "../../../assets/images/A380.jpeg";
import b777 from "../../../assets/images/B777.jpeg";
const PlaneTicket = ({plane}, props) =>{
    let planePick="";
    switch(plane.type){
        case "A350": planePick=a350;
            break;
        case "A380": planePick=a380;
            break;
        case "B777": planePick=b777;
            break;
    }
    return (
        <div className="flex">
            <img className="w-1/6 m-2 rounded" src={planePick} alt="plane picture"/>
            <h2 className="flex items-center">{plane.type}</h2>
        </div>
    );

}

export default PlaneTicket;