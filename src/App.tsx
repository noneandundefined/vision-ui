import { useEffect, useState } from 'react';
import Index from './pages/Index';
import monitoringService from './services/monitoring.service';
import { MonitoringType } from './types/monitoring';
import MessageBox from './components/MessageBox';
import Skeleton from './components/Skeleton';
import authService from './services/auth.service';
import Protected from './pages/Protected';

const App = () => {
	const isAuth = authService.isMetaAuth();
	const [isError, setIsError] = useState<boolean>(false);
	const [responseError, setResponseError] = useState<string>('');
	const [monitoringData, setMonitoringData] = useState<MonitoringType | null>(
		null
	);

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

	return (
		<>
			{isError && (
				<MessageBox
					status={500}
					message={responseError}
					setIsError={setIsError}
				/>
			)}

			{isAuth ? (
				<Protected />
			) : (
				<>
					{!monitoringData ? (
						<Skeleton />
					) : (
						<Index data={monitoringData} />
					)}
				</>
			)}
		</>
	)
};

export default App;
