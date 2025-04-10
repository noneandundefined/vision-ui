// *---------------------------------------------------------------------------------------------
// *  Copyright (c). All rights reserved.
// *  Licensed under the LICENSE-APACHE. See License in the project root for license information.
// *--------------------------------------------------------------------------------------------*

import React from 'react';
import { ErrorLog } from '@/app/types/monitoring';

interface ErrorsWidgetProps {
	data?: {
		last_errors?: ErrorLog[];
	};
}

const ErrorsWidget: React.FC<ErrorsWidgetProps> = ({ data }) => {
	return (
		<>
			<article>
				<div className="px-2 py-1 bg-[#ffffff14]">
					<p className="text-[12px] text-[#fff] text-uppercase">
						LAST ERRORS
					</p>
				</div>
				<div className="p-5 border border-[#ffffff14]">
					<table className="min-w-full">
						<tbody>
							{data?.last_errors?.map((error, index) => (
								<tr
									key={index}
									className={
										index % 2 === 0
											? 'bg-[transparent] cursor-pointer transition hover:bg-[#444]'
											: 'bg-[#ffffff14] cursor-pointer hover:bg-[#444] transition'
									}
								>
									<td className="text-[12px] px-2 py-2 border-b border-[#ffffff14]">
										{new Date(
											error.timestamp
										).toLocaleTimeString([], {
											hour: '2-digit',
											minute: '2-digit',
											second: '2-digit',
										})}
									</td>
									<td className="text-[12px] px-2 py-2 border-b border-[#ffffff14]">
										{error.method}
									</td>
									<td className="text-[12px] px-2 py-2 border-b border-[#ffffff14]">
										{error.path}
									</td>
									<td className="text-[12px] px-2 py-2 border-b border-[#ffffff14]">
										{error.error}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</article>
		</>
	);
};

export default ErrorsWidget;
