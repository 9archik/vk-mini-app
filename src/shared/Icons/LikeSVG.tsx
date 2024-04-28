import { FC } from 'react';
interface ISVG {
	fill?: string;
	className?: string;
	style?: React.CSSProperties;
	width?: number | string;
	height?: number | string;
}
const LikeSVG: FC<ISVG> = ({ fill, className, style, width, height }) => {
	return (
		<svg
			className={className}
			style={style}
			viewBox="0 -0.5 21 21"
			width={width}
			height={height}
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			fill={fill ? fill : '#000000'}>
			<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
			<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
			<g id="SVGRepo_iconCarrier">
				<g
					id="Page-1"
					stroke="none"
					stroke-width="1"
					fill={fill ? fill : '#000000'}
					fill-rule="evenodd">
					<g
						id="Dribbble-Light-Preview"
						transform="translate(-259.000000, -760.000000)"
						fill={fill ? fill : '#000000'}>
						<g id="icons" transform="translate(56.000000, 160.000000)">
							<path
								d="M203,620 L207.200006,620 L207.200006,608 L203,608 L203,620 Z M223.924431,611.355 L222.100579,617.89 C221.799228,619.131 220.638976,620 219.302324,620 L209.300009,620 L209.300009,608.021 L211.104962,601.825 C211.274012,600.775 212.223214,600 213.339366,600 C214.587817,600 215.600019,600.964 215.600019,602.153 L215.600019,608 L221.126177,608 C222.97313,608 224.340232,609.641 223.924431,611.355 L223.924431,611.355 Z"
								id="like-[#1385]"></path>
						</g>
					</g>
				</g>
			</g>
		</svg>
	);
};

export default LikeSVG;
