import { IActiveNewsItem } from '../../features/newsItem/model/interfaces';

export async function getArticleData(articleId: number) {
	try {
		const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${articleId}.json`);

		if (response.ok) {
			const articleData: IActiveNewsItem = await response.json();

			return articleData;
		} else {
			if (response.status >= 500) {
				const err = new Error();

				err.name = 'server_error';

				throw err;
			}
		}
	} catch (error) {
		const err = new Error();

		err.name = 'err_connection';

		throw err;
		return null; // Возвращаем 0 в случае ошибки
	}
}
