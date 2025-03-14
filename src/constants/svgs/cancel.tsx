// *---------------------------------------------------------------------------------------------
// *  Copyright (c). All rights reserved.
// *  Licensed under the LICENSE-APACHE. See License in the project root for license information.
// *--------------------------------------------------------------------------------------------*

interface IconProps {
	fill: string;
	size?: number;
	style?: any;
	className?: string;
	onClick?: () => any;
}

export const Cancel: React.FC<IconProps> = ({
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
			<path d="M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22 2 17.5 2 12 6.5 2 12 2M12 4C10.1 4 8.4 4.6 7.1 5.7L18.3 16.9C19.3 15.5 20 13.8 20 12C20 7.6 16.4 4 12 4M16.9 18.3L5.7 7.1C4.6 8.4 4 10.1 4 12C4 16.4 7.6 20 12 20C13.9 20 15.6 19.4 16.9 18.3Z"></path>
		</svg>
	);
};
export default Cancel;
