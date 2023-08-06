import axios, { AxiosResponse } from "axios";

export class BookController {
    static async createBook(book: any): Promise<AxiosResponse<any, any>> {
        return await axios.post("http://localhost:3000/books", { title: book.title, content: book.content });
    }
    
    static async updateBook(id: string, book: any): Promise<AxiosResponse<any, any>> {
        return await axios.put(`http://localhost:3000/books/${id}`, { title: book.title, content: book.content });
    }

    static async deleteBook(id: string): Promise<AxiosResponse<any, any>> {
        return await axios.delete(`http://localhost:3000/books/${id}`);
    }
    
    static async getBooks(): Promise<AxiosResponse<any, any>> {
        return await axios.get("http://localhost:3000/books");
    }
}
