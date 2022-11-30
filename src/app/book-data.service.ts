import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './books-list/Book';

 const URL = "https://63865a4f875ca3273d57f67a.mockapi.io/books"

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Book[]>{
    return this.http.get<Book[]>(URL)

  }
}
