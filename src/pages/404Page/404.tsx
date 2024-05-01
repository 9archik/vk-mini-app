import { Title, Text, Div, Button } from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

const NotFoundPage = () => {
	const routeNavigator = useRouteNavigator();
	return (
		<Div
			style={{
				height: '100vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column',
			}}>
			<Title level={'1'}>404</Title>

			<Text>Извините страница не найдена</Text>

			<Button
				style={{ margin: '10px 0 0 0' }}
				onClick={() => {
					routeNavigator.replace('/');
				}}
				hasActive
				hasHover>
				Перейти к списку новостей
			</Button>
		</Div>
	);
};

export default NotFoundPage;
