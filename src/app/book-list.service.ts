import { Injectable } from '@angular/core';
import { Book } from './book/book';

@Injectable({
  providedIn: 'root'
})
export class BookListService {

  data: Book[] | undefined

  constructor() { }

}
