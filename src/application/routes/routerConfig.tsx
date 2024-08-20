import { useRoutes } from 'react-router-dom';
import { ROUTES } from './routes';
import { DrawingBoard } from 'presentation/pages/DrawingBoard';

export const RouterConfig = () => {
	const config = useRoutes([
		{
			path: ROUTES.main,
			element: <DrawingBoard />,
		},
	]);

	return config;
};