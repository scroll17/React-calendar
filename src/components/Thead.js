import moment from "moment";
import React from "react";

import './STYLE/style.css'

function Thead(){
    let date = moment();
    let th = [];

    for(let i = 0; i<=6; i++){
        date.set('d',i);
        th.push(<th>{date.format('ddd').charAt(0)}</th>);
    }

    return <thead>{th}</thead>
}

export default Thead;
