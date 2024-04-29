import { INews } from '../../../widgets/newsList/Model/interfaces';

export interface INewsSlice {
	loading: boolean;
	error: boolean;
	array: INews[] | null;
}
