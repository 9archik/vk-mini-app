import { IActiveNewsItem } from '../../features/newsItem/model/interfaces';

export async function getArticleData(articleId: number) {
	try {
		const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${articleId}.json`);

		if (response.ok) {
			const articleData: IActiveNewsItem = await response.json();

			const data: IActiveNewsItem = {
				id: articleData.id,
				url: articleData.url,
				title: articleData.title,
				time: articleData.time,
				by: articleData.by,
				text: articleData?.text,
				descendants: articleData.descendants,
				type: articleData.type,
			};

			return data;
		} else {
			if (response.status >= 500) {
				const err = new Error('server_error');

				err.name = 'server_error';

				throw err;
			}
		}
	} catch (error) {
		const err = error as Error;

		if (err.message === 'Failed to fetch' || err.message.includes('NetworkError')) {
			err.name = 'err_connection';
			err.message = 'err_connection';

			throw err;
		}

		throw err;
		return;
	}
}
