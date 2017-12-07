import { Paginator } from './index';
import { NumberToArrayPipe } from '../../app/shared/pipes/number-to-array.pipe';
import { Injectable } from '@angular/core';

@Injectable()
export class PaginatorService {
  constructor() {

  }
  getPaginator(totalItems: number, currentPage: number = 1, pageSize: number = 5): Paginator {
    // calculate total pages
    const totalPages = Math.ceil(totalItems / pageSize);
    let startPage, endPage;
    if (totalPages <= 10) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9; 
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    // calculate start and end item indexes
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    const pages = new NumberToArrayPipe().transform(startPage, endPage);

    const paginator = new Paginator();
    paginator.currentPage = currentPage;
    paginator.totalItems = totalItems;
    paginator.pageSize = pageSize;
    paginator.totalPages = totalPages;
    paginator.startPage = startPage;
    paginator.endPage = endPage;
    paginator.startIndex = startIndex;
    paginator.endIndex = endIndex;
    paginator.pages = pages;

    return paginator;
  }
}
