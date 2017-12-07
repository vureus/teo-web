export module BooleanHelper {

  export function getDefaultBoolean(value: boolean): boolean {
    return (value === undefined || value === null) ? false : value;
  }

  export function isNullOrUndefined(value: any): boolean {
    return (value === undefined || value === null) ? true : false;
  }

  export function isEmpty(value: any): boolean {
    return (value === '') ? true : false;
  }

  export function isNullOrEmpty(value: any): boolean {
    return (value === undefined || value === null || value === '') ? true : false;
  }

  export function isNaN(value: any): boolean {
    return value === 'NaN';
  }

}
