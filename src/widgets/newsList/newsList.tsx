import { Card, CardGrid, Group, Separator, Spacing } from '@vkontakte/vkui';
import LoadingCard from '../../shared/UI/newsList/loadingCard/loadingCard';
import NewsCard from '../../shared/UI/newsList/newsCard/newsCard';

const NewsList = () => {
	return (
		<>
			<CardGrid size="l">
				<Spacing size={10}>
					<Separator />
				</Spacing>

				<NewsCard
					rating={5}
					img={{
						src: 'https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
						alt: '',
					}}
					date={'date'}
					header={'header'}
					author="alex"
				/>

				<Spacing size={10}>
					<Separator />
				</Spacing>

				<NewsCard
					rating={0}
					img={{
						src: 'https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
						alt: '',
					}}
					date={'date'}
					header={'header'}
					author="alex"
				/>

				<Spacing size={10}>
					<Separator />
				</Spacing>

				<NewsCard
					rating={-1}
					img={{
						src: 'https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
						alt: '',
					}}
					date={'date'}
					header={'header'}
					author="alex"
				/>

				<Spacing size={20}>
					<Separator />
				</Spacing>
			</CardGrid>
		</>
	);
};

export default NewsList;
