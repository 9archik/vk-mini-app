import { PanelHeader, PanelHeaderClose, Avatar } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/components.css';
import '@vkontakte/vkui/dist/vkui.css';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';
import { IHeaderProp } from './model/interfaces';
import { FC, useEffect, useState } from 'react';
import bridge from '@vkontakte/vk-bridge';
const Header: FC<IHeaderProp> = ({ beforeEl }) => {
	const [avatar, setAvatar] = useState<string>('');
	useEffect(() => {
		bridge
			.send('VKWebAppGetUserInfo')
			.then((data) => {
				if (data.photo_100 || data.photo_200) {
					setAvatar(data.photo_100 || data.photo_200);
				} else {
					setAvatar('');
				}
			})
			.catch((error) => {});
	}, []);
	return (
		<>
			<PanelHeader
				style={{ color: 'white' }}
				shadow={true}
				before={beforeEl}
				after={<Avatar size={36} src={avatar} />}>
				News
			</PanelHeader>
		</>
	);
};

export default Header;
