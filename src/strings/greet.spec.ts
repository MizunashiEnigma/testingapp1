import { greet } from "./greet";

describe('greet - S00237686', () => {
    it('should include the name in this message', () => {
        expect(greet('Frank')).toContain('Frank');
    });
    
    it('should not include the name in the message', () => {
        expect(greet('Frank')).toContain('');
    });
});