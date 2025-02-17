import { greet } from "./greet";

describe('greet', () => {
    it('should include the name in this message', () => {
        expect(greet('Frank')).toContain('Frank');
    });
});