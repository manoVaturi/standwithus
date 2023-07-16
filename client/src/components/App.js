import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
import Desktop from './Desktop';
import EndPage from './EndPage';
const router = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
	},
	{
		path: '/quiz',
		element: <Quiz></Quiz>,
	},
	{
		path: '/result',
		element: <Result></Result>,
	},

	{
		path: '/redirect',
		element: <div>Redirect</div>,
	},
	{
		path: '/end',
		element: <EndPage></EndPage>,
	},
]);

function App() {
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		setIsMobile(window.outerWidth <= 900);
	}, []);

	window.addEventListener('resize', () => {
		setIsMobile(window.outerWidth <= 900);
	});

	return (
		<>
			{isMobile ? (
				<RouterProvider router={router}></RouterProvider>
			) : (
				<div>
					<Desktop />
				</div>
			)}
		</>
	);
}

export default App;
