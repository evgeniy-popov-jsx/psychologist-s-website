import { useRoutes } from 'react-router-dom';
import { ROUTES } from './routes';
import { DrawingBoard } from 'presentation/pages/DrawingBoard';
import { Photos } from 'presentation/pages/Photos';
import { Educations } from 'presentation/pages/Education';
import { Price } from 'presentation/pages/Price';

export const RouterConfig = () => {
	const config = useRoutes([
		{
			path: ROUTES.main,
			element: <DrawingBoard />,
		},
		{
			path: ROUTES.photos,
			element: <Photos />,
		},
		{
			path: ROUTES.educations,
			element: <Educations />,
		},
		{
			path: ROUTES.price,
			element: <Price />,
		},
	]);

	return config;
};