class Book{
    title: string;
    author: string;
    year: number;

    constructor(title: string, author: string, year:number){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getInfo(){
        console.log(`Название: ${this.title}, Автор: ${this.author}, Год: ${this.year}`);
    }
}

const book = new Book("Сияние", "Стивен Кинг", 1977);
book.getInfo();

class Library{
    private books: Book[] = [];
    addBook(book: Book): void {
        this.books.push(book);
    }

    listBooks(){
        const bookInfos: any [] = [];
        for (let i = 0; i < this.books.length; i++) {
            bookInfos.push(this.books[i].getInfo());
        }
        console.log(bookInfos);
    }
}

const library = new Library();
const book1 = new Book("Оно", "Стивен Кинг", 1986);
const book2 = new Book("Кладбище домашних животных", "Стивен Кинг", 1983);

library.addBook(book1);
library.addBook(book2);

console.log(library.listBooks());

