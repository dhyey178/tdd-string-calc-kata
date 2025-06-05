export class StringCalculator {
  Add(numbers: string): number {
    if (numbers === "") {
      return 0;
    } else {
      return parseInt(numbers, 10);
    }
  }
}
