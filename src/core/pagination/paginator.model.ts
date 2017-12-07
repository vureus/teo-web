export class Paginator {
  public totalItems: number;
  public currentPage: number;
  public pageSize: number;
  public totalPages: number;
  public startPage: number;
  public endPage: number;
  public startIndex: number;
  public endIndex: number;
  public pages: Array<number>;

  constructor() {
    this.pages = new Array<number>();
    this.pageSize = 10;
  }
}
