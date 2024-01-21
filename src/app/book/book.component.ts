import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookListService } from '../book-list.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})

export class BookComponent implements OnInit {
  selectedBook: Book | undefined;
  books: Book[] | undefined;

  constructor(private bookListService: BookListService) {}

  ngOnInit(): void {
    
    this.books = this.bookListService.data;
    
    if (this.books && this.books.length > 0) {
      this.onSelect(this.books[0]);
    }
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }

}