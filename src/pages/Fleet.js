import PlaneTicket from "../components/molecules/PlaneTicket/PlaneTicket";

const Fleet = () =>{
    const planes =[
        { type: 'A350', totalAmount: 25, inActivity: 15, inOrder: 10, version: '1000' },
        { type: 'B777', totalAmount: 12, inActivity: 10, inOrder: 2, version: '900'},
        { type: 'A380', totalAmount: 10, inActivity: 10, inOrder: 0, version: '800' }
    ];
    return(
        <div className="">
            <div>
                {planes.map(plane => <PlaneTicket plane={plane}/>)}
            </div>
        </div>
    );
};

export default Fleet;