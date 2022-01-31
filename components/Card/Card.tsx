import React from 'react';
import {ICard} from "../../interfaces/ICard";

const Card: React.FC<ICard> = props => {
    return (
        <div className={`bg-white rounded-lg ${props.className}`}>
            {props.children}
        </div>
    );
};


export default Card;