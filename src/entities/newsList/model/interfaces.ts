export interface INewsCardProp {
	header: React.ReactNode | string;
	img?: {
		src: string;
		alt: string;
	};
	author: string;
	rating: number;
	date: string;
	onClick: () => void;
}
