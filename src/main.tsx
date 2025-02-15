import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { RouterProvider } from 'react-router-dom';

createRoot(document.getElementById('vision')!).render(
	<StrictMode>
		<RouterProvider router={App} />
	</StrictMode>
);


