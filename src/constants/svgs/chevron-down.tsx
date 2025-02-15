interface IconProps {
    fill: string;
    size?: number;
    style?: any;
    className?: string;
    onClick?: () => any;
}

export const ChevronDown: React.FC<IconProps> = ({
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
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
        </svg>
    );
};
export default ChevronDown;
