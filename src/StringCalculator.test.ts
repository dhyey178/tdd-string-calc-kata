import { StringCalculator } from './StringCalculator';

describe('StringCalculator', () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  it('should return 0 for an empty string', () => {
    const numbers = "";

    const result = calculator.Add(numbers);

    expect(result).toBe(0);
  });

  it('should return the number for a single number string', () => {
    const numbers = "1";

    const result = calculator.Add(numbers);

    expect(result).toBe(1);
  });

});