
import React from 'react'
import Context from "./context";

const State = (props) => {
    const loginSubmit = (e) =>{
        e.preventDefault();
        console.log("SUbmit")
    }
    return (
        <div>
            <Context.Provider value={{loginSubmit}}>
                {props.children}
            </Context.Provider>
        </div>
    )
}

export default State
