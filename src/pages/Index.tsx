import { useEffect, useState } from 'react';
import Effects from '../components/Effects';
import Header from '../components/Header';
import Cancel from '../constants/svgs/cancel';
import Database from '../constants/svgs/database';
import Received from '../constants/svgs/received';
import Server from '../constants/svgs/server';
import ServerLoad from '../components/Index/ServerLoad';
import LastErrors from '../components/Index/LastErrors';
import Requests from '../components/Index/Requests';
import monitoringService from '../services/monitoring.service';
import { MonitoringType } from '../types/monitoring';
import Skeleton from '../components/Skeleton';
import MessageBox from '../components/MessageBox';
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

const Index = () => {
	const [isError, setIsError] = useState<boolean>(false);
	const [responseError, setResponseError] = useState<string>('');
	const [monitoringData, setMonitoringData] = useState<MonitoringType | null>(
		null
	);
	const [currentStep, setCurrentStep] = useState<number>(0);

	useEffect(() => {
		const fetch = async () => {
			try {
				let response = await monitoringService.fetchMonitoringData();

				if (!response) {
					response =
						await monitoringService.fetchMonitoringDataFile();
					console.log(response);
				}

				setMonitoringData(response);
			} catch (error: any) {
				setIsError(true);
				setResponseError(error.message);
			}
		};

		fetch();
	}, []);
	

	const displayStep = (step: number) => {
		switch (step) {
			case 0:
				return <ServerLoad data={monitoringData?.system} />;
			case 1:
				return <DatabaseInfo data={monitoringData?.database} />;
			case 2:
				return <Requests data={monitoringData?.requests} />;
			case 3:
				return (
					<LastErrors
						data={{
							last_errors: monitoringData?.last_errors || [],
						}}
					/>
				);
		}
	};

	return (
		<>
			<Effects />

			{isError && (
				<MessageBox
					status={500}
					message={responseError}
					setIsError={setIsError}
				/>
			)}

			{!monitoringData ? (
				<Skeleton />
			) : (
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
			)}
		</>
	);
};

export default Index;
