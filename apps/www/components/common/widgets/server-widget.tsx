// *---------------------------------------------------------------------------------------------
// *  Copyright (c). All rights reserved.
// *  Licensed under the LICENSE-APACHE. See License in the project root for license information.
// *--------------------------------------------------------------------------------------------*

import React from 'react';
import {
	CircularProgressbarWithChildren,
	buildStyles,
} from 'react-circular-progressbar';

interface ServerWidgetProps {
	data?: {
		cpu_usage?: number;
		memory_usage?: number;
		network_recv?: number;
	};
}

const ServerWidget: React.FC<ServerWidgetProps> = ({ data }) => {
	return (
		<>
			<article className="py-2">
				<div className="px-2 py-1 bg-[#ffffff14]">
					<p className="text-[12px] text-[#fff] text-uppercase">
						SYSTEM
					</p>
				</div>
				<div className="p-5 border border-[#ffffff14]">
					<div className="flex space-x-10 justify-center">
						{[
							{
								value: (data?.cpu_usage ?? 0).toFixed(0),
								label: 'CPU usage',
								description: `${(data?.cpu_usage ?? 0).toFixed(2)} usage`,
								color: '#FF3F3F',
							},
							{
								value: (data?.memory_usage ?? 0).toFixed(0),
								label: 'Memory usage',
								description: `${(data?.memory_usage ?? 0).toFixed(2)} usage`,
								color: '#C084FC',
							},
							{
								value: (
									(data?.network_recv ?? 0) / 11.1
								).toFixed(0),
								label: 'Network usage',
								description: `${((data?.network_recv ?? 0) / 11.1).toFixed(2)} usage`,
								color: '#60A5FA',
							},
						].map(({ value, label, description, color }) => (
							<div
								key={label}
								className="flex items-center gap-3"
							>
								<div className="w-[3.2rem] h-[3.2rem]">
									<CircularProgressbarWithChildren
										value={Number(value)}
										styles={buildStyles({
											pathColor: color,
											trailColor: '#2D2D2D',
										})}
									>
										<div className="text-[12px] font-semibold text-white">
											{value}%
										</div>
									</CircularProgressbarWithChildren>
								</div>
								<div className="text-[13px]">
									<p className="font-bold">{label}</p>
									<p>{description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</article>
		</>
	);
};

export default ServerWidget;
