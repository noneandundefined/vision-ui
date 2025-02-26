interface IconProps {
    fill: string;
    size?: number;
    style?: any;
    className?: string;
    onClick?: () => any;
}

export const Copy: React.FC<IconProps> = ({
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
            <path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"></path>
        </svg>
    );
};
export default Copy;
