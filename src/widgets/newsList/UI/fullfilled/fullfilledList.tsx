import NewsCard from '../../../../enteties/newsList/UI/newsCard/newsCard';
import { FC } from 'react';
import { IFullfilledNewsList, INews } from '../../Model/interfaces';
import { formatSecondsToDate } from '../../../../shared/functions/timeToDate';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

const FullFilledList: FC<IFullfilledNewsList> = ({ array }) => {
	const routeNavigator = useRouteNavigator();
	return (
		<>
			{array.map((el: INews) => {
				return (
					<NewsCard
						onClick={() => {
							routeNavigator.push(`/${el.id}`);
						}}
						rating={el.score}
						header={el.title}
						date={formatSecondsToDate(el.time)}
						author={el.by}
						key={el.id}
					/>
				);
			})}
		</>
	);
};

export default FullFilledList;
