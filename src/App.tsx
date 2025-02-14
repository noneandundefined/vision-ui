import { createBrowserRouter } from 'react-router-dom';
import Index from './pages/Index';

const App = createBrowserRouter([
	{
		path: '/',
		children: [
			{
				path: '',
				element: (
					<Index />
				),
			},
		],
	},
]);

export default App;
