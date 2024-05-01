import { FC } from 'react';
import ErrorConnection from '../UI/error/errConnection';
import { IErrorProps } from '../Model/interfaces';
import ServerError from '../UI/error/serverError';

const ErrorBlockMap: Map<string, JSX.Element> = new Map([
	['err_connection', <ErrorConnection />],
	['server_error', <ServerError />],
]);

const Error: FC<IErrorProps> = ({ error }) => {
	return <>{ErrorBlockMap.get(error) ? ErrorBlockMap.get(error) : null}</>;
};

export default Error;
