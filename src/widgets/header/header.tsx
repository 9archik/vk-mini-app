import { PanelHeader, PanelHeaderClose, Avatar } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/components.css';
import '@vkontakte/vkui/dist/vkui.css';
const Header = () => {
	return (
		<>
			<PanelHeader
				style={{ color: 'white' }}
				fixed={true}
				shadow={true}
				before={<PanelHeaderClose style={{transform: 'translateY(2px)'}} onClick={() => ''} />}
				after={<Avatar size={36} />}>
				News
			</PanelHeader>
		</>
	);
};

export default Header;
