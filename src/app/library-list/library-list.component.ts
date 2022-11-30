import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { BookLibraryService } from '../book-library.service';

import { Book } from '../books-list/Book';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.scss']
})
export class LibraryListComponent implements OnInit {

  libraryList: Book[] | undefined;
  constructor(private library: BookLibraryService) {
    library.libraryList.subscribe(b=> this.libraryList = b);
   }

  ngOnInit(): void {
  }

}
