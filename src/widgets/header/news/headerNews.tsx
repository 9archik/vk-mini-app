import { PanelHeaderBack } from '@vkontakte/vkui';
import Header from '../../../entities/header/header';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

const HeaderNewsItem = () => {
	const routeNavigator = useRouteNavigator();
	return (
		<Header
			beforeEl={
				<PanelHeaderBack
					onClick={() => {
						routeNavigator.replace('/');
					}}
				/>
			}
		/>
	);
};

export default HeaderNewsItem;
