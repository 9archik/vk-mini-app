import { ICommentListItemAPI } from '../Model/interface';

export async function getComments(articleId: number) {
	const comments: ICommentListItemAPI[] = [];

	try {
		const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${articleId}.json`)
			.then()
			.catch();
		if (response.ok) {
			const articleData = await response.json();

			console.log('article', articleData);

			if (articleData.kids) {
				await Promise.all(
					articleData.kids.map(async (commentId: number) => {
						const commentResponse = await fetch(
							`https://hacker-news.firebaseio.com/v0/item/${commentId}.json`,
						);
						const commentData = await commentResponse.json();

						if (commentData?.deleted) {
							comments.push({
								deleted: true,
								kids:
									commentData?.kids && Array.isArray(commentData?.kids) ? commentData?.kids : null,
								id: commentData?.id,
							});
						} else {
							comments.push({
								text: commentData.text,
								by: commentData.by,
								time: commentData.time,
								kids:
									commentData?.kids && Array.isArray(commentData?.kids) ? commentData?.kids : null,
								id: commentData?.id,
								deleted: false,
							});
						}
					}),
				);
			}

			return comments;
		} else {
			if (response.status >= 500) {
				const error = new Error();
				error.name = 'server_error';
				throw error;
			}
		}
	} catch (error) {
		const err = new Error();
		err.name = 'err_connection';
		throw err;
	}
}
