export class NumbersCollection {

  constructor(public data: number[]) {}

  get length(): number {
    return this.data.length;
  }
  compare(leftIndex: number, rightIndex: number):boolean {
    if (this.data[leftIndex] > this.data[rightIndex])
      return true;
    return false;
  }
  swap(leftIndex: number, rightIndex: number): void {
    const temp = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = temp;
  }
}