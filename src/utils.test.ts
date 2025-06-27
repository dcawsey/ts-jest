import { add } from './utils';

describe('utils', () => {
    describe('add', () => {
        it('returns correct result', () => {
            const result = add(2, 3);
            expect(result).toBe(5);
        });
    });
});
