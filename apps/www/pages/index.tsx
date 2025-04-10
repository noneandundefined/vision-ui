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
		}, 1000);

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

					<div className="flex">
						<div className="w-1/3"></div>
						<div className="w-1/3"></div>
						<div className="w-1/3">
							<WorkhoursWidget />
							<RequestsWidget data={data.requests} />
						</div>
					</div>
				</main>
			</>
		</>
	);
};

export default Index;
