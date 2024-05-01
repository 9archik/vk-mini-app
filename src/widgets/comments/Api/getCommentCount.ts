export async function getCommentCount(articleId: number) {
	try {
		const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${articleId}.json`);
		const articleData = await response.json();

		return articleData.descendants || 0; // Возвращаем количество комментариев или 0, если поле отсутствует
	} catch (error) {
		console.error('Ошибка:', error);
		return 0; // Возвращаем 0 в случае ошибки
	}
}
