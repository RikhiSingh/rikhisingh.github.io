import React from "react";

const ToggleButtons = ({setOpen}) => {
    return ( 
        <button onClick={() => setOpen((prev) => !prev)}>
            button
        </button>
     );
}
 
export default ToggleButtons;