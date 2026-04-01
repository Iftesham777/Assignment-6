import React, { use } from 'react';
import Availableplears from '../Availableplears';

const Players = ({playersPromise}) => {
    console.log(playersPromise);
     const data = use(playersPromise);
     console.log(data);
    return (
        <div className="con">
             

            <Availableplears Players={Players} />
        </div>
    );
};

export default  Players;