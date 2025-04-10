// *---------------------------------------------------------------------------------------------
// *  Copyright (c). All rights reserved.
// *  Licensed under the LICENSE-APACHE. See License in the project root for license information.
// *--------------------------------------------------------------------------------------------*

import React, { useEffect, useState } from 'react';
import Effects from '../components/layout/effects';
import Header from '../components/layout/header';
import { MonitoringType } from '../../app/types/monitoring';
import WorkhoursWidget from '../components/common/widgets/workhours-widget';
import RequestsWidget from '../components/common/widgets/request-widget';
import ServerWidget from '../components/common/widgets/server-widget';
import DatabaseWidget from '../components/common/widgets/database-widget';
import ErrorsWidget from '../components/common/widgets/error-widget';
import LogsWidget from '../components/common/widgets/logs-widget';

const Index: React.FC<{ data: MonitoringType }> = ({ data }) => {
	const [dateString, setDateString] = useState(() => {
		const options = {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		};
		return new Date().toLocaleDateString('en-US', options as any);
	});

	useEffect(() => {
		const intervalId = setInterval(() => {
			const options = {
				weekday: 'long',
				year: 'numeric',
				month: 'long',
				day: 'numeric',
			};
			setDateString(
				new Date().toLocaleDateString('en-US', options as any)
			);
		}, 1000000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<>
			<Effects />

			<>
				<Header />

				<main className="px-10 py-5">
					<h3 className="text-[#fff] text-[1.11rem] font-medium pb-5">
						{dateString}
					</h3>

					<div className="flex gap-4">
						<div className="w-1/3">
							<LogsWidget data={{ logs: data.logs }} />
						</div>
						<div className="w-1/3">
							<ErrorsWidget
								data={{ last_errors: data.last_errors }}
							/>
						</div>
						<div className="w-1/3">
							<WorkhoursWidget />
							<RequestsWidget data={data.requests} />
							<ServerWidget data={data.system} />
							<DatabaseWidget data={data.database} />
						</div>
					</div>
				</main>
			</>
		</>
	);
};

export default Index;
