import Comments from '../../widgets/comments/comments';
import NewsItem from '../../widgets/newsItem/newsItem';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import HeaderNewsItem from '../../widgets/header/news/headerNews';
import { useEffect, useState } from 'react';
import { getArticleData } from '../../shared/Api/getArticleData';
import { useParams } from '@vkontakte/vk-mini-apps-router';
import { useAppDispatch, useAppSelector } from '../../app/hooks/reduxTypes';
import {
	setActiveItem,
	setCommentsCounterLoading,
	setCommentsCounterValue,
	setCommentsCounterError,
} from '../../features/newsItem/slices/slices';
import Error from './error/error';

const NewsPage = () => {
	const params = useParams<'id'>();
	const routeNavigator = useRouteNavigator();
	const dispatch = useAppDispatch();
	const info = useAppSelector((state) => state.activeNews.info);
	const [loadingInfo, setLoadingInfo] = useState(false);
	const [errorInfo, setErrorInfo] = useState<null | string>(null);

	const updateArticleData = () => {
		if (params?.id && !isNaN(Number(params?.id))) {
			dispatch(setCommentsCounterLoading(true));
			setLoadingInfo(true);
		
			getArticleData(Number(params.id))
				.then((res) => {
					if (!res || !res?.type || res?.type === 'comment') {
						routeNavigator.replace('notFound');
					} else {
						dispatch(setActiveItem(res));
						setLoadingInfo(false);
						setErrorInfo(null);
						if (res?.descendants !== undefined) {
							dispatch(setCommentsCounterValue(res.descendants));
							dispatch(setCommentsCounterLoading(false));
							dispatch(setCommentsCounterError(false));
						}
					}
				})
				.catch((err: Error) => {
					dispatch(setCommentsCounterValue(null));
					dispatch(setCommentsCounterLoading(false));
					dispatch(setCommentsCounterError(true));
					setLoadingInfo(false);

					if (!info) {
						setErrorInfo(err.name);
					}
				});
		} else {
			routeNavigator.replace('/notFound');
		}
	};
	useEffect(() => {
		updateArticleData();
	}, []);

	useEffect(() => {
		window.addEventListener('online', updateArticleData);

		return () => {
			window.removeEventListener('online', updateArticleData);
		};
	}, []);

	if (errorInfo) {
		return (
			<>
				<HeaderNewsItem />
				<Error loadingUpdate={loadingInfo} updateData={updateArticleData} error={errorInfo} />;
			</>
		);
	}

	return (
		<>
			<HeaderNewsItem />
			{info && (
				<>
					<NewsItem />
					<Comments />
				</>
			)}
		</>
	);
};

export default NewsPage;
