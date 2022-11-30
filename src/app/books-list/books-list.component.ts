import { Component, OnInit } from '@angular/core';
import { BookDataService } from '../book-data.service';
import { BookLibraryService } from '../book-library.service';
import { Book } from './Book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  books: Book [] =[]
  

  constructor(
    private library: BookLibraryService,
    private booksDataService: BookDataService) {
}

  ngOnInit(): void {
    this.booksDataService.getAll()
    .subscribe(books => this.books= books);
  }

  addLibrary(book: Book): void{
    
    this.library.addLibrary(book);
  }

}
