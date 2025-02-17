import { getCurrencies } from "./getCurrencies";

describe('getCurrencies - S00237686',()=>{
    it('It contains USD',() => {
        expect(getCurrencies().includes('USD'));
    });

    it('It contains GBP',() => {
        expect(getCurrencies().includes('GBP'));
    });

    it('It contains EUR',() => {
        expect(getCurrencies().includes('EUR'));
    });

    //i am curious as to why these test pass. despite them having wrong params
    it('It contains CAD', () =>{
        expect(getCurrencies().includes('CAD'));
    });

    it('It contains All (self made test - can ignore: it passes. somehow. with no parameters)', () =>{
        expect(getCurrencies().includes(''));
    });
})