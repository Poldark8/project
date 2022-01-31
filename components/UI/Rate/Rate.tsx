import {IRate} from "../../../interfaces/IRate";
import Rating from 'react-rating';
import {ReactSVG} from "react-svg";
import RateClasses from './Rate.module.scss';

const Rate: React.FC<IRate> = (props) => {
    return (
        <div className={props.className}>
            <Rating
                direction='ltr'
                initialRating={props.value}
                readonly={props.readonly}
                emptySymbol={props.emptySymbol}
                fullSymbol={props.fullSymbol}
                onClick={props.onClick}
                onChange={props.onChange}
                onHover={props.onHover}
                start={props.start}
                stop={props.stop}
                className={`${RateClasses.rating}`}
            />
        </div>

    );
};

Rate.defaultProps = {
    emptySymbol: <ReactSVG src='/icons/star-empty.svg/'/>,
    fullSymbol: <ReactSVG src='/icons/star-filled.svg'/>,
    start: 0,
    stop: 5,
};


export default Rate;
