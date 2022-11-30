import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import { LibraryListComponent } from './library-list/library-list.component';
import { CommunityComponent } from './community/community.component';
import { BookmarkHomeComponent } from './bookmark-home/bookmark-home.component';



@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    LibraryListComponent,
    CommunityComponent,
    BookmarkHomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
