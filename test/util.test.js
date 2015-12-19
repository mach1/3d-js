import { expect } from 'chai';
import { range } from '../app/utils/util.js'

describe('util', () => {
  describe('range', () => {
    it('should be a function', () => {
      expect(range).to.be.a('function');
    });

    it('should return return a range from start finish', () => {
      expect(range(1, 3)).to.have.same.members([1, 2, 3]);
    });
  });
});
