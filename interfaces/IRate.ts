export interface IRate {
    value: number;
    readonly?: boolean;
    emptySymbol?: any;
    fullSymbol?: any;
    onClick?: () => void;
    onChange?: any;
    onHover?: () => void;
    start?: number;
    stop?: number;
    className?: string;
}
