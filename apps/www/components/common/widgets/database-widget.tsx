// *---------------------------------------------------------------------------------------------
// *  Copyright (c). All rights reserved.
// *  Licensed under the LICENSE-APACHE. See License in the project root for license information.
// *--------------------------------------------------------------------------------------------*

import React from 'react';
import {
	CircularProgressbarWithChildren,
	buildStyles,
} from 'react-circular-progressbar';

interface DatabaseWidgetProps {
	data?: {
		database_queries?: number;
		database_error?: number;
		database_avg_latency_ms?: number;
	};
}

const DatabaseWidget: React.FC<DatabaseWidgetProps> = ({ data }) => {
	return (
		<>
			<article className="py-2">
				<div className="px-2 py-1 bg-[#ffffff14]">
					<p className="text-[12px] text-[#fff] text-uppercase">
						DATABASE
					</p>
				</div>
				<div className="p-5 border border-[#ffffff14]">
					<div className="flex space-x-10 justify-center">
						{[
							{
								value: (
									((data?.database_error ?? 0) /
										(data?.database_queries ?? 1)) *
									100
								).toFixed(0),
								label: 'Error count',
								description: `${data?.database_error ?? 0} errors`,
								color: '#FF3F3F',
							},
							{
								value: (
									((data?.database_queries ?? 0) /
										(data?.database_queries ?? 1)) *
									100
								).toFixed(0),
								label: 'Total count',
								description: `${data?.database_queries ?? 0} total`,
								color: '#88FC84',
							},
							{
								value: (
									((data?.database_avg_latency_ms ?? 0) /
										500) *
									100
								).toFixed(0),
								label: 'Avg latency',
								description: `${(data?.database_avg_latency_ms ?? 0).toFixed(2)} avg latency`,
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

export default DatabaseWidget;
