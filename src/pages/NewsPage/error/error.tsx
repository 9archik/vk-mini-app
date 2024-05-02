import { FC } from 'react';
import { IErrorProps } from './model/interface';
import ErrorConnection from './errConnection';
import ServerError from './serverError';
import { Div, Button } from '@vkontakte/vkui';
import styles from './style.module.css';

const ErrorBlockMap: Map<string, JSX.Element> = new Map([
	['err_connection', <ErrorConnection />],
	['server_error', <ServerError />],
]);

const Error: FC<IErrorProps> = ({ error, updateData, loadingUpdate }) => {
	return (
		<Div className={styles.container}>
			{ErrorBlockMap.get(error) ? ErrorBlockMap.get(error) : null}

			<Button disabled={loadingUpdate} loading={loadingUpdate} onClick={updateData}>
				Обновить страницу
			</Button>
		</Div>
	);
};

export default Error;
