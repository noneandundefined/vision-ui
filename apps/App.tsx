// *---------------------------------------------------------------------------------------------
// *  Copyright (c). All rights reserved.
// *  Licensed under the LICENSE-APACHE. See License in the project root for license information.
// *--------------------------------------------------------------------------------------------*

import { useEffect, useState } from 'react';
import Index from './www/pages';
import monitoringService from '@/app/services/monitoring.service';
import { MonitoringType } from './app/types/monitoring';
import Notification from '@/www/components/common/notification';
import Skeleton from '@/www/components/common/skeleton';
import authService from '@/app/services/auth.service';
import Protected from './www/pages/protected';

const App = () => {
	const isAuth = authService.isMetaAuth();
	const isSession = authService.isAuthenticate();
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

	const renderGlobalContent = () => {
		if (isError) {
			return (
				<Notification
					status={500}
					message={responseError}
					setIsError={setIsError}
				/>
			);
		}

		if (!monitoringData) {
			return <Skeleton />;
		}

		return <Index data={monitoringData} />;
	};

	return (
		<>
			{isError && (
				<Notification
					status={500}
					message={responseError}
					setIsError={setIsError}
				/>
			)}

			{isAuth ? (
				<>
					{isSession ? (
						renderGlobalContent()
					) : (
						<Protected
							setIsError={setIsError}
							setResponseError={setResponseError}
						/>
					)}
				</>
			) : (
				renderGlobalContent()
			)}
		</>
	);
};

export default App;
