const monthsGenitive = [
	'янв',
	'фев',
	'мар',
	'апр',
	'мая',
	'июн',
	'июл',
	'авг',
	'сент',
	'окт',
	'ноя',
	'дек',
];

function secondsToDate(seconds: number) {
	const date = new Date(0); // Создаем объект Date, начиная с эпохи Unix (1 января 1970)
	date.setTime(seconds * 1000); // Устанавливаем время в миллисекундах
	return date;
}

function formatNumberTime(num: number) {
	if (num < 10) {
		return `0${num}`;
	}

	return num;
}

export function formatSecondsToDate(seconds: number): string {
	let date = secondsToDate(seconds);

	let hour = formatNumberTime(date.getHours());

	let minutes = formatNumberTime(date.getMinutes())

	return `${date.getDate()} ${monthsGenitive[date.getMonth()]} ${date.getFullYear()} ${hour}:${minutes}`;
}
