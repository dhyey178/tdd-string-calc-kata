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

  it('should return the sum of two numbers separated by a comma', () => {
    const numbers = "1,2";

    const result = calculator.Add(numbers);

    expect(result).toBe(3);
  });

  it('should return the sum of any amount of numbers separated by commas', () => {
    const numbers = "1,2,3,4,5";

    const result = calculator.Add(numbers);

    expect(result).toBe(15);
  });

  it('should handle new lines between numbers as delimiters', () => {
    const numbers = "1\n2,3";

    const result = calculator.Add(numbers);

    expect(result).toBe(6);
  });

  it('should support custom single character delimiters', () => {
    const numbers = "//;\n1;2";

    const result = calculator.Add(numbers);

    expect(result).toBe(3);
  });

  it('should throw an exception for a single negative number', () => {
    const numbers = "-1";

    expect(() => calculator.Add(numbers)).toThrow('negatives not allowed -1');
  });

  it('should throw an exception listing all negative numbers', () => {
    const numbers = "1,-2,3,-4,5";

    expect(() => calculator.Add(numbers)).toThrow('negatives not allowed -2,-4');
  });
});