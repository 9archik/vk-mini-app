import { INews } from '../Model/interfaces';

async function getTopStories(): Promise<number[]> {
	try {
		const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
		const data = await response.json();
		return data.slice(0, 100); // Получаем первые 100 новейших новостей
	} catch {
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
		return newsDetails;
	} catch (error) {
		console.error('Error fetching news:', error);
	}
}
