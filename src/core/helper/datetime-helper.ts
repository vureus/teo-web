import { ENUMS } from '../enums/index';
export module DATETIME_HELPER {

  export const HOURS = [
    { key: 0, value: '00:00' },
    { key: 0.5, value: '00:30' },
    { key: 1, value: '01:00' },
    { key: 1.5, value: '01:30' },
    { key: 2, value: '02:00' },
    { key: 2.5, value: '02:30' },
    { key: 3, value: '03:00' },
    { key: 3.5, value: '03:30' },
    { key: 4, value: '04:00' },
    { key: 4.5, value: '04:30' },
    { key: 5, value: '05:00' },
    { key: 5.5, value: '05:30' },
    { key: 6, value: '06:00' },
    { key: 6.5, value: '06:30' },
    { key: 7, value: '07:00' },
    { key: 7.5, value: '07:30' },
    { key: 8, value: '08:00' },
    { key: 8.5, value: '08:30' },
    { key: 9, value: '09:00' },
    { key: 9.5, value: '09:30' },
    { key: 10, value: '10:00' },
    { key: 10.5, value: '10:30' },
    { key: 11, value: '11:00' },
    { key: 11.5, value: '11:30' },
    { key: 12, value: '12:00' },
    { key: 12.5, value: '12:30' },
    { key: 13, value: '13:00' },
    { key: 13.5, value: '13:30' },
    { key: 14, value: '14:00' },
    { key: 14.5, value: '14:30' },
    { key: 15, value: '15:00' },
    { key: 15.5, value: '15:30' },
    { key: 16, value: '16:00' },
    { key: 16.5, value: '16:30' },
    { key: 17, value: '17:00' },
    { key: 17.5, value: '17:30' },
    { key: 18, value: '18:00' },
    { key: 18.5, value: '18:30' },
    { key: 19, value: '19:00' },
    { key: 19.5, value: '19:30' },
    { key: 20, value: '20:00' },
    { key: 20.5, value: '20:30' },
    { key: 21, value: '21:00' },
    { key: 21.5, value: '21:30' },
    { key: 22, value: '22:00' },
    { key: 22.5, value: '22:30' },
    { key: 23, value: '23:00' },
    { key: 23.5, value: '23:30' }
  ];

  export const DAYS_OF_WEEK = [
    { key: ENUMS.DayOfWeek.Monday, value: 'Monday' },
    { key: ENUMS.DayOfWeek.Tuesday, value: 'Tuesday' },
    { key: ENUMS.DayOfWeek.Wednesday, value: 'Wednesday' },
    { key: ENUMS.DayOfWeek.Thursday, value: 'Thursday' },
    { key: ENUMS.DayOfWeek.Friday, value: 'Friday' },
    { key: ENUMS.DayOfWeek.Saturday, value: 'Saturday' },
    { key: ENUMS.DayOfWeek.Sunday, value: 'Sunday' }
  ];

  export const MONTHS = [
    { key: ENUMS.Month.January, value: 'January' },
    { key: ENUMS.Month.February, value: 'February' },
    { key: ENUMS.Month.March, value: 'March' },
    { key: ENUMS.Month.April, value: 'April' },
    { key: ENUMS.Month.May, value: 'May' },
    { key: ENUMS.Month.June, value: 'June' },
    { key: ENUMS.Month.July, value: 'July' },
    { key: ENUMS.Month.August, value: 'August' },
    { key: ENUMS.Month.September, value: 'September' },
    { key: ENUMS.Month.October, value: 'October' },
    { key: ENUMS.Month.November, value: 'November' },
    { key: ENUMS.Month.December, value: 'December' }
  ];

  export const YEARS = [
    { key: 2016, value: '2016' },
    { key: 2017, value: '2017' },
    { key: 2018, value: '2018' },
    { key: 2018, value: '2019' }
  ];

  export const TIME_UNITS = [
    { key: ENUMS.TimeUnit.Hours, value: 'hour(s)' },
    { key: ENUMS.TimeUnit.Days, value: 'day(s)' },
  ];

  export const TICKETTYPE_SALE_TYPES = [
    { key: ENUMS.TickTypeSaleEndType.Starts, value: 'starts' },
    { key: ENUMS.TickTypeSaleEndType.Ends, value: 'ends' },
  ];

  export const FILTER_DATES = [
    { key: ENUMS.EventShowingFilter.All, value: 'All showtimes' },
    { key: ENUMS.EventShowingFilter.ThisMonth, value: 'This month' },
    { key: ENUMS.EventShowingFilter.ThisYear, value: 'This year' },
    { key: ENUMS.EventShowingFilter.NextMonth, value: 'Next month' },
  ];

  export function ToTwoCharNumberFormat(number: number): string {
    if (number !== undefined && !isNaN(number)) {
      return number <= 9 ? '0' + number : number.toString();
    }
    return '';
  }

  export function getDateString(date: Date): string {
    if (date !== undefined) {
      return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    }
    return '';
  }

  export function getMonthName(month: ENUMS.Month): string {
    switch (month) {
      case ENUMS.Month.January: return 'January';
      case ENUMS.Month.February: return 'February';
      case ENUMS.Month.March: return 'March';
      case ENUMS.Month.April: return 'April';
      case ENUMS.Month.May: return 'May';
      case ENUMS.Month.June: return 'June';
      case ENUMS.Month.July: return 'July';
      case ENUMS.Month.August: return 'August';
      case ENUMS.Month.September: return 'September';
      case ENUMS.Month.October: return 'October';
      case ENUMS.Month.November: return 'November';
      case ENUMS.Month.December: return 'December';
      default: return 'Undefined';
    }
  }

  export function getMonthShortName(month: ENUMS.Month): string {
    switch (month) {
      case ENUMS.Month.January: return 'Jan';
      case ENUMS.Month.February: return 'Feb';
      case ENUMS.Month.March: return 'Mar';
      case ENUMS.Month.April: return 'Apr';
      case ENUMS.Month.May: return 'May';
      case ENUMS.Month.June: return 'Jun';
      case ENUMS.Month.July: return 'Jul';
      case ENUMS.Month.August: return 'Aug';
      case ENUMS.Month.September: return 'Sep';
      case ENUMS.Month.October: return 'Oct';
      case ENUMS.Month.November: return 'Nov';
      case ENUMS.Month.December: return 'Dec';
      default: return 'Undefined';
    }
  }

  export function getDateFormat(dateString: string, formatType: ENUMS.DateTimeFormatType): string {
    let array = this.getNumbersByDateString(dateString, formatType);
    let result: string;

    switch (formatType) {
      case ENUMS.DateTimeFormatType.ShortDatePattern:
        result = DATETIME_HELPER.ToTwoCharNumberFormat(array[0]) + ' ' +
          DATETIME_HELPER.getMonthShortName(array[1]) + ' ' +
          array[2];
        break;
      case ENUMS.DateTimeFormatType.SortableDateTimePattern:
        result = DATETIME_HELPER.ToTwoCharNumberFormat(array[2]) + ' ' +
          DATETIME_HELPER.getMonthShortName(array[1]) + ' ' +
          array[0];
        break;
      default:
        result = null;
        break;
    }

    return result;
  }

  export function getNumbersByDateString(dateString: string, formatType: ENUMS.DateTimeFormatType): Array<number> {
    let stringArray: Array<string>;
    let numberArray = new Array<number>();
    if (dateString !== undefined) {
      switch (formatType) {
        case ENUMS.DateTimeFormatType.ShortDatePattern:
          stringArray = dateString.split('/');
          break;
        case ENUMS.DateTimeFormatType.SortableDateTimePattern:
          let arrayDate = dateString.split('T');
          stringArray = arrayDate[0].split('-');
          break;
        default:
          stringArray = null;
          break;
      }

      numberArray.push(parseInt(stringArray[0], 0));
      numberArray.push(parseInt(stringArray[1], 0));
      numberArray.push(parseInt(stringArray[2], 0));

      return numberArray;
    }
  }

  export function isGreaterThan(dateString1: string, dateString2: string): boolean {
    let numbersArray1 = getNumbersByDateString(dateString1, ENUMS.DateTimeFormatType.ShortDatePattern);
    let numbersArray2 = getNumbersByDateString(dateString2, ENUMS.DateTimeFormatType.ShortDatePattern);

    if (numbersArray1[2] > numbersArray2[2]) {
      return true;
    } else if (numbersArray1[2] === numbersArray2[2]) {
      if (numbersArray1[1] > numbersArray2[1]) {
        return true;
      } else if (numbersArray1[1] === numbersArray2[1]) {
        if (numbersArray1[0] > numbersArray2[0]) {
          return true;
        }
      }
    }
    return false;
  }

  export function isEqual(dateString1: string, dateString2: string): boolean {
    let numbersArray1 = getNumbersByDateString(dateString1, ENUMS.DateTimeFormatType.ShortDatePattern);
    let numbersArray2 = getNumbersByDateString(dateString2, ENUMS.DateTimeFormatType.ShortDatePattern);

    return numbersArray1[2] === numbersArray2[2] &&
      numbersArray1[1] === numbersArray2[1] &&
      numbersArray1[0] === numbersArray2[0];
  }

  export function getDateEventString(date: string): string {
    let stringArray = date.split('T');
    let stringDate = stringArray[0].split('-');
    let stringHours = stringArray[1].split(':');
    let hours: number = parseInt(stringHours[0], 0);

    return (hours > 12 ? hours - 12 : hours) + ':' + stringHours[1] + (hours > 12 ? 'PM' : 'AM')
      + ' ' + stringDate[2] + '/' + stringDate[1] + '/' + stringDate[0];
  }
}
