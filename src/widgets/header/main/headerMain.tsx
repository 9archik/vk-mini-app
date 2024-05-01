import { Button } from '@vkontakte/vkui';
import Header from '../../../shared/UI/header/header';
import { PanelHeaderClose } from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';

const HeaderMain = () => {
	return (
		<Header
			beforeEl={
				<PanelHeaderClose
					onClick={() => {
						bridge
							.send('VKWebAppClose', {
								status: 'success',
								payload: {
									name: 'value',
								},
							})
							.then((data: any) => {
								if (data?.status) {
									// Событие отправлено
								}
							})
							.catch((error) => {
								// Ошибка
								console.log(error);
							});
					}}
				/>
			}
		/>
	);
};

export default HeaderMain;
