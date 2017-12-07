export module NumberHelper {

  export function isValidNumber(value: number): boolean {
    return value === undefined || isNaN(value) || value === null ? false : true;
  }

  export function getDefaultNumber(value: number): number {
    return this.isValidNumber(value) ? value : 0;

  }

  /**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
  export function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  /**
   * Returns a random integer between min (inclusive) and max (inclusive)
   * Using Math.round() will give you a non-uniform distribution!
   */
  export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
