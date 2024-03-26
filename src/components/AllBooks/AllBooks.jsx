import { useEffect, useState } from 'react';
// import banner from '../../assets/images/banner.png'
import Book from '../Book/Book';
const AllBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])

    return (
        <div className="container mx-auto w-10/12 lg:w-4/5">
            <div className="text-center my-16">
                <h2 className="text-4xl lg:text-4xl font-manrope font-extrabold mt-8 lg:mt-6 playfair">Books</h2>
            </div>
            <div className="card grid grid-cols-1 lg:grid-cols-3 gap-5">
               {
                books.map(book => <Book key={book.bookId} book={book}></Book>)
               }
            </div>
        </div>
    );
};

export default AllBooks;