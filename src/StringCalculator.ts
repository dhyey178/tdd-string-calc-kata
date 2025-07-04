export class StringCalculator {
  Add(numbers: string): number {
    let delimiters: RegExp | string[] = /[\n,]/;
    let numbersToParse = numbers;

    if (numbers.startsWith("//")) {
      const parts = numbers.split('\n');
      const customDelimiterPart = parts[0];
      const actualNumbersPart = numbers.substring(numbers.indexOf('\n')+1)

      let customDelimitersArray: string[] = [];
      if (customDelimiterPart.startsWith("//[")) {
        customDelimitersArray = customDelimiterPart
          .substring(2, customDelimiterPart.length - 1)
          .split('][');
      } else {
        customDelimitersArray.push(customDelimiterPart.substring(2));
      }
      const customDelimiter = customDelimitersArray.join('|');

      delimiters = new RegExp(`[\\n,${customDelimiter}]`);
      numbersToParse = actualNumbersPart;
    }

    const numberStrings = numbersToParse.split(delimiters);
    const negativeNumbers: number[] = [];

    let sum = 0;
    for (const numStr of numberStrings) {
      const num = parseInt(numStr, 10);
      if (num < 0) {
        negativeNumbers.push(num);
      } else if (num <= 1000){
        sum += num;
      }
    }

    if (negativeNumbers.length > 0) {
      throw new Error(`negatives not allowed ${negativeNumbers.join(',')}`);
    }

    return sum;
  }
}
