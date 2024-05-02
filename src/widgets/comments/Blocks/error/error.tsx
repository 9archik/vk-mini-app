import { ICommentListError } from '../../Model/interface';
import ErrorConnection from './errConnection';
import ServerError from './serverError';
import { FC } from 'react';
const ErrorBlockMap: Map<string, JSX.Element> = new Map([
	['err_connection', <ErrorConnection />],
	['server_error', <ServerError />],
]);

const Error: FC<ICommentListError> = ({ error}) => {
	return <>{ErrorBlockMap.get(error) ? ErrorBlockMap.get(error) : null}</>;
};

export default Error;
