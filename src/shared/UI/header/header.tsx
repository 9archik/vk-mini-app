import { PanelHeader, PanelHeaderClose, Avatar } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/components.css';
import '@vkontakte/vkui/dist/vkui.css';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';
import { IHeaderProp } from './model/interfaces';
import { FC } from 'react';
const Header: FC<IHeaderProp> = ({ beforeEl }) => {
	return (
		<>
			<PanelHeader
				style={{ color: 'white' }}
				shadow={true}
				before={beforeEl}
				after={<Avatar size={36} />}>
				News
			</PanelHeader>
		</>
	);
};

export default Header;
