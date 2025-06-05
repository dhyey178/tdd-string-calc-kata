export class StringCalculator {
  Add(numbers: string): number {
    if (numbers === "") {
      return 0;
    }

    const numberStrings = numbers.split(','); 
    const sum = numberStrings.reduce((acc, numStr) => {
      return acc + parseInt(numStr, 10);
    }, 0);
    return sum;

  }
}
