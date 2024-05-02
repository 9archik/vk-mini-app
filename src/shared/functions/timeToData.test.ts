import { formatSecondsToDate } from './timeToDate'; // Путь к файлу с функцией

describe('formatSecondsToDate', () => {
	it('should format seconds to date string', () => {
		const seconds = 1678886400;
		const expectedDate = '15 мар 2023 16:20';

		expect(formatSecondsToDate(seconds)).toBe(expectedDate);
	});
});
