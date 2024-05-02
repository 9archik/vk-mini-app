import { IActiveNewsItem } from '../../features/newsItem/model/interfaces';

export async function getArticleData(articleId: number) {
	try {
		const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${articleId}.json`);
		const articleData: IActiveNewsItem = await response.json();

		return articleData;
	} catch (error) {
		const err = new Error();

		err.name = 'server_error';

		throw err;
		return null; // Возвращаем 0 в случае ошибки
	}
}
