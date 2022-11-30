import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from './books-list/Book';

@Injectable({
  providedIn: 'root'
})
export class BookLibraryService {

  private _libraryList: Book [] = [];
  libraryList: BehaviorSubject <Book[]> = new BehaviorSubject(this._libraryList);

  constructor() { }

  addLibrary(book: Book) {
    let item: Book =this._libraryList.find((v1) => v1.title == book.title)!; 
    if (!item){
      this._libraryList.push(book);
    } 
    
    console.log(this._libraryList);
    this.libraryList.next(this._libraryList);
  }

  
}
