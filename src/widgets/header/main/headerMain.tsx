import { Button } from '@vkontakte/vkui';
import Header from '../../../entities/header/header';
import { PanelHeaderClose } from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';
import { useEffect, useState } from 'react';

const HeaderMain = () => {
	const [showClose, setShowClose] = useState(false);
	useEffect(() => {
		bridge
			.send('VKWebAppGetLaunchParams')
			.then((data) => {
				if (data.vk_platform) {
					if (data.vk_platform.includes('web') || data.vk_platform.includes('desktop')) {
						setShowClose(true);
					} else {
						setShowClose(false);
					}
				}
			})
			.catch((error) => {
				setShowClose(false);
			});
	}, []);
	return (
		<Header
			beforeEl={
				showClose ? (
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
								.catch((error) => {});
						}}
					/>
				) : (
					<></>
				)
			}
		/>
	);
};

export default HeaderMain;
