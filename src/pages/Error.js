import { NavLink } from "react-router-dom";

const Error = ({styleToAdd}) =>{
    return(
        <div style={styleToAdd} className="App">
            <div
                className="flex
                flex-col
                justify-center
                min-h-screen
                items-center">
                <h1
                    className="font-bold
                    text-red-700
                    text-center
                    text-3xl">
                    404 Not found
                </h1>
                <NavLink
                    className="mt-5
                    ml-5
                    p-2
                    rounded
                    bg-sky-500
                    text-white
                    hover:bg-sky-700
                    active:bg-sky-200"
                    to="/">
                    Return Home
                </NavLink>
            </div>
        </div>
    );
};

export default Error;