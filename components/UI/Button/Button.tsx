import React from 'react';
import PropTypes from 'prop-types';
import {IButton} from "../../../interfaces/IButton";
import ButtonClasses from './Button.module.scss';
import {ReactSVG} from "react-svg";

const Button: React.FC<IButton> = props => {
        return (
            <button className={`${ButtonClasses.button} ${props.className}`}>
                {props.helperIconName && <ReactSVG src={`/icons/${props.helperIconName}.svg`}/>}
                {props.label}
            </button>
        );
    }
;

Button.defaultProps = {
    type: 'submit',
}

export default Button;