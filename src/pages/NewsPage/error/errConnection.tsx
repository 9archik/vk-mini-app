import { Div, Text } from '@vkontakte/vkui';
import styles from './style.module.css';
const ErrorConnection = () => {
	return (
		<>
			<Text weight="1">Не удалось получить данные</Text>
			<Text weight="3">Проверьте подключение к интернету</Text>
		</>
	);
};

export default ErrorConnection;
