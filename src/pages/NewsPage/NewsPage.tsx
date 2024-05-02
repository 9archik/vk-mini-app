import Comments from '../../widgets/comments/comments';
import NewsItem from '../../widgets/newsItem/newsItem';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import HeaderNewsItem from '../../widgets/header/news/headerNews';
import { useEffect } from 'react';
import { getArticleData } from '../../shared/Api/getArticleData';
import { useParams } from '@vkontakte/vk-mini-apps-router';
import { useAppDispatch } from '../../app/hooks/reduxTypes';
import {
	setActiveItem,
	setCommentsCounterLoading,
	setCommentsCounterValue,
	setCommentsCounterError,
} from '../../features/newsItem/slices/slices';

const NewsPage = () => {
	const params = useParams<'id'>();
	const routeNavigator = useRouteNavigator();
	const dispatch = useAppDispatch();
	useEffect(() => {
		if (params?.id && !isNaN(Number(params?.id))) {
			dispatch(setCommentsCounterLoading(true));
			getArticleData(Number(params.id))
				.then((res) => {
					if (!res || !res?.type || res?.type === 'comment') {
						routeNavigator.replace('notFound');
					} else {
						dispatch(setActiveItem(res));
						if (res?.descendants !== undefined) {
							dispatch(setCommentsCounterValue(res.descendants));
							dispatch(setCommentsCounterLoading(false));
							dispatch(setCommentsCounterError(false));
						}
					}
				})
				.catch((err) => {
					dispatch(setCommentsCounterValue(null));
					dispatch(setCommentsCounterLoading(false));
					dispatch(setCommentsCounterError(true));
				});
		} else {
			console.log('404');
			routeNavigator.replace('/notFound');
		}
	}, []);
	return (
		<>
			<HeaderNewsItem />
			<NewsItem />
			<Comments />
		</>
	);
};

export default NewsPage;
