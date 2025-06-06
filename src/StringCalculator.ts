export class StringCalculator {
  Add(numbers: string): number {
    if (numbers === "") {
      return 0;
    }

    let delimiters: RegExp | string[] = /[\n,]/;
    let numbersToParse = numbers;

    if (numbers.startsWith("//")) {
      const parts = numbers.split('\n');
      const customDelimiterPart = parts[0];
      const actualNumbersPart = numbers.substring(numbers.indexOf('\n')+1)
      const customDelimiter = customDelimiterPart.substring(2);
      delimiters = new RegExp(`[\\n,${customDelimiter}]`);
      numbersToParse = actualNumbersPart;
    }

    const numberStrings = numbersToParse.split(delimiters);

    const sum = numberStrings.reduce((acc, numStr) => {
      return acc + parseInt(numStr, 10);
    }, 0);

    return sum;
  }
}
