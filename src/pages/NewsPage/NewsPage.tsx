import Comments from '../../widgets/comments/comments';
import Header from '../../widgets/header/header';
import NewsItem from '../../widgets/newsItem/newsItem';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

const NewsPage = () => {
	const routeNavigator = useRouteNavigator();
	return (
		<>
			<Header
				beforeClick={() => {
					routeNavigator.back();
				}}
			/>
			<NewsItem />
			<Comments />
		</>
	);
};

export default NewsPage;
