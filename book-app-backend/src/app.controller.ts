import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { BOOKS } from './dummyData/books';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/books")
  getBooks(): any[] {
    return BOOKS;
  }

  @Get("/books/:id")
  getBookById(@Param("id") id: string): string {
    return BOOKS.find((book) => book.id === id);
  }

  @Post("/books")
  createBook(@Body() book: any): any {
    return book;
  }

  @Put("/books/:id")
  updateBookById(@Param("id") id: string, @Body() book: any): any {
    return book;
  }

  @Delete("/books/:id")
  deleteBookById(@Param("id") id: string): any {
    return null;
  }
  
}
