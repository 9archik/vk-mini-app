import { Div, Link, Separator } from '@vkontakte/vkui';
import { FC } from 'react';
import { INewsLinkItemUI } from '../../Model/interfaces';

const NewsInfoLink: FC<INewsLinkItemUI> = ({ href, text = 'Ссылка' }) => {
	return (
		<>
			<Div>
				<Link
					hasActive
					hasHover
					hasVisited
					aria-checked
					aria-valuetext={`Перейти на сайт ${href}`}
					href={href}
					target="__blank">
					{text}
				</Link>
			</Div>
		</>
	);
};

export default NewsInfoLink;
