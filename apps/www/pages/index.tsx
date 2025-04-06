// *---------------------------------------------------------------------------------------------
// *  Copyright (c). All rights reserved.
// *  Licensed under the LICENSE-APACHE. See License in the project root for license information.
// *--------------------------------------------------------------------------------------------*

import React, { useState } from 'react';
import Effects from '../components/layout/effects';
import Header from '../components/layout/header';
import Cancel from '../components/common/svgs/cancel';
import Database from '../components/common/svgs/database';
import Received from '../components/common/svgs/received';
import Server from '../components/common/svgs/server';
import ServerLoad from '../components/common/widgets/server-widget';
import LastErrors from '../components/common/widgets/error-widget';
import Requests from '../components/common/widgets/request-widget';
import { MonitoringType } from '../../app/types/monitoring';
import DatabaseInfo from '../components/common/widgets/database-widget';

const panel_list = [
	{
		title: 'Server load',
		icon: <Server fill="#fff" size={19} />,
		step: 0,
	},
	{
		title: 'Database',
		icon: <Database fill="#fff" size={19} />,
		step: 1,
	},
	{
		title: 'Requests',
		icon: <Received fill="#fff" size={19} />,
		step: 2,
	},
	{
		title: 'Last errors',
		icon: <Cancel fill="#fff" size={19} />,
		step: 3,
	},
];

const Index: React.FC<{ data: MonitoringType }> = ({ data }) => {
	const [currentStep, setCurrentStep] = useState<number>(0);

	const displayStep = (step: number) => {
		switch (step) {
			case 0:
				return <ServerLoad data={data?.system} />;
			case 1:
				return <DatabaseInfo data={data?.database} />;
			case 2:
				return <Requests data={data?.requests} />;
			case 3:
				return (
					<LastErrors
						data={{
							last_errors: data?.last_errors || [],
						}}
					/>
				);
		}
	};

	return (
		<>
			<Effects />

			<div>
				<Header />

				<div className="my-5 flex items-center justify-between bg-[#ffffff21]">
					{panel_list.map((panel, index) => (
						<div
							className={`flex items-center gap-4 cursor-pointer transition p-4 px-[3rem]`}
							style={
								currentStep === panel.step
									? { background: '#ffffff17' }
									: { background: 'transparent' }
							}
							key={index}
							onClick={() => setCurrentStep(panel.step)}
						>
							<p id="title__panel">{panel.title}</p>
							{panel.icon}
						</div>
					))}
				</div>

				<div>{displayStep(currentStep)}</div>
			</div>
		</>
	);
};

export default Index;
