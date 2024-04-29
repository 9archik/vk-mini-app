import { INews } from '../Model/interfaces';

export function isArrayOfTypeNews(arr: any): arr is INews[] {
	if (Array.isArray(arr))
		return arr.every(
			(item) =>
				typeof item === 'object' &&
				item !== null &&
				'by' in item &&
				'descedants' in item &&
				'id' in item &&
				'time' in item &&
				'title' in item &&
				'type' in item &&
				'url' in item &&
				'score' in item,
		);
	else {
		return false;
	}
}
