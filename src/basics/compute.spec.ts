import {compute} from './compute';

describe('compute', ()=>{
    it('should return 0 if the input is negative',() => {
        const result = compute(-1);
        expect(result).toBe(0);
    })

    it ('should return input+1 if input is positive', () => {
        const result = compute(1);
        expect(result).toBe(2);
    })

    it('it should return input>1 if input is positive', () => {
        const result = compute(1);
        expect(result).toBeGreaterThan(1);
    }) 

    it('it should return input<3 if input is postive', () =>{
        const result=compute(1);
        expect(result).toBeLessThan(3);
    })
});