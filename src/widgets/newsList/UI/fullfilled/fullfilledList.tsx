import NewsCard from '../../../../entities/newsList/UI/newsCard/newsCard';
import { FC } from 'react';
import { IFullfilledNewsList, INews } from '../../Model/interfaces';
import { formatSecondsToDate } from '../../../../shared/functions/timeToDate';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { useAppDispatch } from '../../../../app/hooks/reduxTypes';
import { setActiveItem } from '../../../../features/newsItem/slices/slices';

const FullFilledList: FC<IFullfilledNewsList> = ({ array }) => {
	const routeNavigator = useRouteNavigator();
	const dispatch = useAppDispatch();

	return (
		<>
			{array &&
				array.map((el: INews) => {
					return (
						<NewsCard
							onClick={() => {
								routeNavigator.push(`/${el.id}`);
								dispatch(
									setActiveItem({
										id: el?.id,
										time: el?.time,
										title: el?.title,
										url: el?.url,
										by: el?.by,
									}),
								);
							}}
							rating={el?.score}
							header={el?.title}
							date={formatSecondsToDate(el?.time)}
							author={el?.by}
							key={el?.id}
						/>
					);
				})}
		</>
	);
};

export default FullFilledList;
