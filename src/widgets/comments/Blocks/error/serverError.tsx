import { Div, Text } from '@vkontakte/vkui';
import styles from './styles.module.css';
const ServerError = () => {
	return (
		<Div className={styles.container}>
			<Text weight="1">Ошибка сервера</Text>
			<Text weight="3">Комментарии не удалось загрузить</Text>
		</Div>
	);
};

export default ServerError;
