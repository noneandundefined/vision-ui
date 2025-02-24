import React, { useState } from 'react';
import Effects from '../components/Effects';
import Header from '../components/Header';
import Cancel from '../constants/svgs/cancel';
import Database from '../constants/svgs/database';
import Received from '../constants/svgs/received';
import Server from '../constants/svgs/server';
import ServerLoad from '../components/Index/ServerLoad';
import LastErrors from '../components/Index/LastErrors';
import Requests from '../components/Index/Requests';
import { MonitoringType } from '../types/monitoring';
import DatabaseInfo from '../components/Index/DatabaseInfo';

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
