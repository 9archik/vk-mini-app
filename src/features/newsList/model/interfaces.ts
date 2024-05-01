import { INews } from '../../../widgets/newsList/Model/interfaces';

export interface INewsSlice {
	loading: boolean;
	error: string | null;
	array: INews[] | null;
}
