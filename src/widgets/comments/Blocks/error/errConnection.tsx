import { Div, Text } from '@vkontakte/vkui';
import styles from './styles.module.css';
const ErrorConnection = () => {
	return (
		<Div className={styles.container}>
			<Text weight="1">Не удалось получить комментарии</Text>
			<Text weight="3">Проверьте подключение к интернету</Text>
		</Div>
	);
};

export default ErrorConnection;
