import React from "react";

const Qualitie = (props) => {
    const {color, name, _id} = props;
    return (
        <span className={"badge m-1 bg-" + color} key={_id}>
            {name}
        </span>
    )
};

export default Qualitie;