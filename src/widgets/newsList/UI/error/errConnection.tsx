import { Div, Title } from '@vkontakte/vkui';
import styles from './style.module.css';
const ErrorConnection = () => {
	return (
		<Div className={styles.container}>
			<Title weight="1">Не удалось загрузить данные</Title>

			<Title weight="2">Пожалуйста, проверьте подключение к интернету</Title>
		</Div>
	);
};

export default ErrorConnection;
