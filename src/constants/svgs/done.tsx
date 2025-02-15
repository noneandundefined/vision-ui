interface IconProps {
    fill: string;
    size?: number;
    style?: any;
    className?: string;
    onClick?: () => any;
}

export const Done: React.FC<IconProps> = ({
    fill,
    size = 24,
    className,
    style,
    onClick,
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            viewBox={`0 0 24 24`}
            fill={fill}
            style={style}
            width={size}
            height={size}
            onClick={onClick}
        >
            <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path>
        </svg>
    );
};
export default Done;
