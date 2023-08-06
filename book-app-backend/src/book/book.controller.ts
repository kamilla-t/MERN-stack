import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './models/CreateBookDto';
import { Book } from './book.schema';

@Controller("books")
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async getBooks(): Promise<Book[]> {
    return this.bookService.findAll().then();
  }

  @Get("/:id")
  async getBookById(@Param("id") id: string): Promise<Book> {
    return this.bookService.findById(id).then();
  }

  @Post()
  async createBook(@Body() book: CreateBookDto): Promise<CreateBookDto> {
    return this.bookService.create(book).then();
  }

  @Put("/:id")
  async updateBookById(@Param("id") id: string, @Body() book: CreateBookDto): Promise<Book> {
    return this.bookService.update(id, book).then();
  }

  @Delete("/:id")
  async deleteBookById(@Param("id") id: string): Promise<void> {
    return this.bookService.delete(id).then();
  }
  
}
