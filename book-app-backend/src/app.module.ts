import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './book/book.schema';
import { BookModule } from './book/book.module';
import * as dotenv from "dotenv";

dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://${process.env.CONNECTION_STRING}/book`),
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
    BookModule,
  ],
})
export class AppModule {}
