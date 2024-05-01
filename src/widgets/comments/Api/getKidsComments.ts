import { ICommentListItemAPI } from '../Model/interface';

export async function getCommentsByIds(commentIds: number[]) {
	const comments: ICommentListItemAPI[] = [];

	// Параллельное выполнение запросов
	await Promise.all(
		commentIds.map(async (commentId) => {
			try {
				const response = await fetch(
					`https://hacker-news.firebaseio.com/v0/item/${commentId}.json`,
				);
				const commentData = await response.json();

				if (commentData?.deleted) {
					comments.push({
						deleted: true,
						kids: commentData?.kids && Array.isArray(commentData?.kids) ? commentData?.kids : null,
						id: commentData?.id,
					});
				} else {
					comments.push({
						text: commentData.text,
						by: commentData.by,
						time: commentData.time,
						kids: commentData?.kids && Array.isArray(commentData?.kids) ? commentData?.kids : null,
						id: commentData?.id,
						deleted: false,
					});
				}
			} catch (error) {
				console.error(`Ошибка при получении комментария ${commentId}:`, error);
				return null;
			}
		}),
	);

	return comments;
}
