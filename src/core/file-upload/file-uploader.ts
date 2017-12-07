import { Injectable } from '@angular/core';

@Injectable()

export class FileUploaderService {

  public getFileStream(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      if (file != null) {
        let reader = new FileReader();
        reader.onload = (event: any) => {
          let fileStream: string = event.target.result;
          resolve(fileStream);
        };
        reader.readAsDataURL(file);
      } else {
        reject();
      }
    });
  }
}
