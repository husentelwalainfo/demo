import { compute, greetingmsg } from './test';

// describe('compute',() => {
//     it('Should return 0 if input is negative', () => {
//         const result = compute(-1);
//         expect(result).toBe(0);
//     })
// })


describe('greetingmsg',() => {
    it('It should greet with the name passed in the function', () => {
        expect(greetingmsg('Lorem ipsum')).toContain('Lorem ipsum');
    })
})
