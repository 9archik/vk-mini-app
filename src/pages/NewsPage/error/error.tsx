import { FC } from 'react';
import { IErrorProps } from './model/interface';
import ErrorConnection from './errConnection';
import ServerError from './serverError';

const ErrorBlockMap: Map<string, JSX.Element> = new Map([
	['err_connection', <ErrorConnection />],
	['server_error', <ServerError />],
]);

const Error: FC<IErrorProps> = ({ error }) => {
	return <>{ErrorBlockMap.get(error) ? ErrorBlockMap.get(error) : null}</>;
};

export default Error;
