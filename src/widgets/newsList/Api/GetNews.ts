import { error } from 'console';
import { INews } from '../Model/interfaces';

async function getTopStories(): Promise<number[]> {
	try {
		const response = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json')
			.then()
			.catch();
		if (response.ok) {
			const data = await response.json();
			return data.slice(0, 100); // Получаем первые 100 новейших новостей
		} else {
			const error = new Error();

			if (response.status >= 500) {
				error.name = 'server_error';
			}
			throw error;
		}
	} catch {
		const error = new Error();
		error.name = 'err_connection';
		throw error;
		return [];
	}
}

async function fetchNewsDetails(storyIds: number[]): Promise<INews[]> {
	const promises = storyIds.map((id) =>
		fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then((res) => res.json()),
	);
	return Promise.all(promises);
}

export async function getLatestNews() {
	try {
		const storyIds = await getTopStories();
		const newsDetails = await fetchNewsDetails(storyIds);
		const newsDetailsSort = newsDetails.sort((a, b) => b.time - a.time);
		return newsDetailsSort;
	} catch (error) {
		const err = error as Error;
		throw err;
	}
}
