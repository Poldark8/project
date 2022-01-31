import React from 'react';
import {IText} from "../../../interfaces/IText";
import TextClasses from './Text.module.scss';

const Text: React.FC<IText> = props => {
    const TEXT: any = props.variant!;
    return (
        <TEXT className={`${TextClasses[TEXT]} ${props.className}`}>
            {props.children}
        </TEXT>
    );
};

Text.defaultProps = {
    variant: 'p',
    color: 'text'
};

export default Text;