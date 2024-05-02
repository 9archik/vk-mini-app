import { Div, Title, Text } from '@vkontakte/vkui';
import styles from './style.module.css';
const ServerError = () => {
	return (
		<Div className={styles.container}>
			<Title weight="1">Ошибка сервера</Title>

			<Text>Не удалось получить данные</Text>
		</Div>
	);
};

export default ServerError;
