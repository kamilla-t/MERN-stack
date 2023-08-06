import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './book.schema';
import { CreateBookDto } from './models/CreateBookDto';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  async create(book: CreateBookDto): Promise<Book> {
    const createdBook = new this.bookModel(book);
    return createdBook.save();
  }

  async update(id: string, book: CreateBookDto): Promise<Book> {
    return this.bookModel.findByIdAndUpdate(id, book, {new: true});
  }

  async delete(id: string): Promise<void> {
    await this.bookModel.findByIdAndDelete(id, {new: true});
  }

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  async findById(id: string): Promise<Book> {
    return this.bookModel.findById(id).exec();
  } 

}
