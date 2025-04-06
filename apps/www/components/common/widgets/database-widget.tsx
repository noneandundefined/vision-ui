// *---------------------------------------------------------------------------------------------
// *  Copyright (c). All rights reserved.
// *  Licensed under the LICENSE-APACHE. See License in the project root for license information.
// *--------------------------------------------------------------------------------------------*

import React from 'react';
import Speed from '@/www/components/common/svgs/speed';
import Received from '@/www/components/common/svgs/received';
import Cancel from '@/www/components/common/svgs/cancel';

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
			<div className="flex items-center justify-between my-[2rem]">
				<div
					className="flex gap-7 items-center justify-center bg-[#ffffff21] hover:bg-[#a2a2a221] transition p-2 min-w-[15.2rem] rounded cursor-pointer"
					id="block__request"
				>
					<div>
						<p className="text-[1.4rem]" id="title__request">
							{data?.database_avg_latency_ms?.toFixed(2)}ms
						</p>
						<p className="text-[13px]" id="desc__request">
							Average response values
						</p>
					</div>
					<Speed fill="#fff" size={30} />
				</div>

				<div
					className="flex gap-7 items-center justify-center bg-[#ffffff21] hover:bg-[#a2a2a221] transition p-2 min-w-[15.2rem] rounded cursor-pointer"
					id="block__request"
				>
					<div>
						<p className="text-[1.4rem]" id="title__request">
							{data?.database_queries} QTY
						</p>
						<p className="text-[13px]" id="desc__request">
							Total requests
						</p>
					</div>
					<Received fill="#fff" size={30} />
				</div>

				<div
					className="flex gap-7 items-center justify-center bg-[#ffffff21] hover:bg-[#a2a2a221] transition p-2 min-w-[15.2rem] rounded cursor-pointer"
					id="block__request"
				>
					<div>
						<p className="text-[1.4rem]" id="title__request">
							{data?.database_error} QTY
						</p>
						<p className="text-[13px]" id="desc__request">
							Total request errors
						</p>
					</div>
					<Cancel fill="#fff" size={30} />
				</div>
			</div>
		</>
	);
};

export default DatabaseWidget;
