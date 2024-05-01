import { useAppSelector } from '../../../app/hooks/reduxTypes';
import FullFilledList from '../UI/fullfilled/fullfilledList';
import Error from '../error/error';
const LoadedList = () => {
	const error = useAppSelector((state) => state.news.error);
	const array = useAppSelector((state) => state.news.array);

	if (error) {
		return (
			<>
				<Error error={error} />
			</>
		);
	}

	return <FullFilledList array={array} />;
};

export default LoadedList