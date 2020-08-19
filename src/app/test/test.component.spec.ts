import { Test } from './test.component';

describe('Test',() => {
    it('It Should Increment the number from 0 to 1', () => {
        let testComponent = new Test;

        testComponent.increment();

        expect(testComponent.number).toBe(1);
    })

    it('It Should Decrement the number from 0 to -1', () => {
        let testComponent = new Test;

        testComponent.decrement();

        expect(testComponent.number).toBe(-1);
    })
  
})