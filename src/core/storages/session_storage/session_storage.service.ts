import { Injectable } from '@angular/core';

@Injectable()
export class SessionStorageService {
  // TODO: Need to handle QUOTA_EXCEEDED_ERR
  constructor() {

  }

  public read(path: string): any {
    // if not in session storage, the string 'undefined' is returned (why???)
    let text = sessionStorage.getItem(path);
    if (text === null || typeof text === 'undefined' || text === 'undefined') {
      return null;
    }  else {
      return text;
    }
  }

  readObject<T>(path): T {
    let text: any = this.read(path);
    let data: T;
    try {
      data = <T>JSON.parse(text);
    } catch (error) {
      data = null;
    }

    return data;
  }

  public write(path: string, text: string): void {
    sessionStorage.setItem(path, text);
  }

  writeObject(path: string, data: any): void {
    let text: string = JSON.stringify(data);
    this.write(path, text);
  }

  remove(path: string): void {
    sessionStorage.removeItem(path);
  }

  clear(): void {
    sessionStorage.clear();
  }
}
