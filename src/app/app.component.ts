import { Component, OnInit } from '@angular/core';
import { BOOKS } from './mock-book';
import { BookListService } from './book-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {

  title = 'Book';

  showList  = true;

  constructor(
    private bookListService: BookListService
  ) {}

  ngOnInit(): void {
      
    this.bookListService.data = BOOKS;
    
  }
  
}
