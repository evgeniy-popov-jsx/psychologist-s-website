import { useRoutes } from 'react-router-dom';
import { ROUTES } from './routes';

export const RouterConfig = () => {
	const config = useRoutes([
		{
			path: ROUTES.main,
			element: '',
		},
	]);

	return config;
};