export module StringHelper {

  export function getDefaultString(value: string): string {
    return (value === undefined || value === null) ? '' : value;
  }

  export function removeSpecialChars(str: string): string {
    return str.replace(/[^a-zA-Z0-9- ]+/g, '');
  }

  export function removeSpaceToToMinus(str: string): string {
    return str.replace(' ', '-');
  }

}
