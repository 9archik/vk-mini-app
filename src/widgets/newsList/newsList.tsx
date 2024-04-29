import { Card, CardGrid, Group, Separator, Spacing, Div, Button, Title } from '@vkontakte/vkui';
import NewsCard from '../../enteties/newsList/UI/newsCard/newsCard';
import styles from './styles.module.css';
import FullFilledList from './UI/fullfilled/fullfilledList';
import { useEffect, useState } from 'react';
import { getLatestNews } from './Api/GetNews';
import { useAppSelector } from '../../app/hooks/reduxTypes';
import { useAppDispatch } from '../../app/hooks/reduxTypes';
import { setLoading, setNews, setError } from '../../features/newsList/slices/slices';
import { RootState } from '../../app/store';
import PendingList from './UI/pending/pendingList';
import { isArrayOfTypeNews } from './utils/checkTypes';
import { useInterval } from '../../shared/hooks/useInterval';

const NewsList = () => {
	const loading = useAppSelector((state) => state.news.loading);
	const error = useAppSelector((state) => state.news.error);
	const array = useAppSelector((state) => state.news.array);
	const [firstUpdate, setFirstUpdate] = useState(false);
	const dispatch = useAppDispatch();

	const setNewsListFirst = () => {
		getLatestNews()
			.then((res) => {
				if (res) {
					dispatch(setNews(res));
					dispatch(setLoading(false));
					setFirstUpdate(true);
				}
			})
			.catch(() => {
				dispatch(setNews(null));
				dispatch(setError(true));
				dispatch(setLoading(false));
				setFirstUpdate(true);
			});
	};

	useEffect(() => {
		setNewsListFirst();
	}, []);

	useInterval(
		() => {
			getLatestNews()
				.then((res) => {
					if (res) {
						dispatch(setNews(res));
						dispatch(setLoading(false));
						dispatch(setError(false));
					}
				})
				.catch(() => {});
		},
		firstUpdate ? 60000 : null,
	);
	return (
		<Div>
			<Button
				onClick={() => {
					setFirstUpdate(false);
					dispatch(setLoading(true));
					setNewsListFirst();
				}}
				style={{ width: '100%' }}>
				<Title level="3"> Обновить список</Title>
			</Button>

			<div className={styles.container}>
				{!loading ? <FullFilledList array={array} /> : <PendingList />}
			</div>
		</Div>
	);
};

export default NewsList;
