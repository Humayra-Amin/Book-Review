import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredReadBooks } from "../../utility/localstorage";

const ListedBooks = () => {

    const books = useLoaderData();

    const [readBooks, setReadBooks] = useState([]);
   

    useEffect(() => {
        const storedBookIds = getStoredReadBooks();

        if (books.length > 0) {
            // const booksRead = books.filter(book => storedBookIds.includes(book.bookId));

            const booksRead = [];
            for (const bookId of storedBookIds) {
                const book = books.find(book => book.bookId === bookId);
                if (book) {
                    booksRead.push(book);
                }
            }

            // console.log(booksRead);
            setReadBooks(booksRead);
        }
    }, [books])
    return (
        <div className="container mx-auto w-10/12 lg:w-4/5">
            <div className="text-center my-16">
                <h2 className="text-4xl lg:text-4xl flex items-center justify-center worksans font-extrabold bg-[#1313130D] rounded-xl h-[100px]">Books</h2>
            </div>

            <div className="text-center items-center justify-center ">
                <div className="dropdown dropdown-bottom">
                    <div tabIndex={0} role="button" className="btn m-1">Sort By</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Rating</a></li>
                        <li><a>Number of Pages</a></li>
                        <li><a>Published Year</a></li>
                    </ul>
                </div>
            </div>

            <div className="mt-12">
                <div role="tablist" className="tabs tabs-lifted">
                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" />

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" checked />

                </div>

                <div className="mt-20 rounded-xl border-2">
                    {readBooks.map(book => (
                        <div key={book.bookId} className="card bg-base-100 shadow-xl flex flex-col lg:flex-row">
                            <figure className="px-10 py-5">
                                <img src={book.image} alt="" className="rounded-xl object-contain w-[200px]" />
                            </figure>
                            <div className="items-center mt-10 ml-4">
                                <h2 className="card-title playfair lg:text-4xl">{book.bookName}</h2>
                                <p className="lg:text-[20px] worksans mt-4  font-medium">By: {book.author}</p>
                                <div className="mt-4 flex lg:flex-row lg:gap-2 gap-6">
                                    <p className="text-[20px] worksans font-semibold">Tag </p>
                                    {book.tags.map((tag, idx) => (
                                        <span key={idx} className="rounded-2xl border-2 bg-[#23be0a0d] text-[#23BE0A] text-center px-2 py-1"> #{tag}</span>
                                    ))}
                                    <img src="../src/assets/images/location.svg" alt="" />
                                    <p className="text-xl worksans">Year of Publishing: {book.yearOfPublishing}</p>
                                </div>
                                <div className="mt-4 flex lg:flex-row lg:gap-2 gap-2">
                                    <img src="../src/assets/images/publisher.svg" alt="" />
                                    <p className="text-xl worksans">Publisher: {book.publisher}</p>
                                    <img src="../src/assets/images/page.svg" alt="" />
                                    <p className="text-xl worksans">Pages: {book.totalPages}</p>
                                </div>
                                <hr className="my-4 lg:w-[800px]" />
                                <div className="card-actions">
                                    <p className="rounded-2xl text-[16px] border-2 bg-[#328EFF26] text-[#328EFF] text-center px-2 py-1 lg:h-[42px] lg:w-auto font-semibold">Category: {book.category}</p>
                                    <p className="rounded-2xl text-[16px] border-2 bg-[#FFAC3326] text-[#FFAC33] text-center px-2 py-1 lg:h-[42px] lg:w-auto font-semibold">Rating: {book.rating}</p>
                                    <Link to={`/book/${book.bookId}`} className="btn rounded-2xl text-[16px] border-2 px-2 py-1 bg-[#23BE0A] text-white h-[40px] w-[110px]">View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;