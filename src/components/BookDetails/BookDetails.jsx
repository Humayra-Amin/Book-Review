import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const BookDetails = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const bookIdInt = parseInt(bookId);
    const book = books.find(book => book.bookId === bookIdInt);
    console.log(book);

    
    return (
        <div className="container mx-auto w-10/12 lg:w-4/5">
            <div className="card lg:card-side mt-14">
                <figure><img src={book.image} alt="Album" className="rounded-lg border bg-[#1313130D] w-[573px] h-[511px] object-contain" /></figure>
                <div className="lg:ml-14">
                    <h2 className="card-title playfair lg:text-4xl">{book.bookName}</h2>
                    <p className="lg:text-[20px] worksans mt-4  font-medium">By: {book.author}</p>
                    <hr className="mt-4 lg:w-[500px]" />
                    <p className="lg:text-[20px] worksans mt-4">{book.category}</p>
                    <hr className="mt-4 lg:w-[500px]" />
                    <p className="lg:text-[20px] worksans mt-4">{book.review}</p>
                    <div className="mt-4 flex lg:flex-row lg:gap-2 gap-6">
                        <p className="text-[20px] worksans font-semibold">Tag </p>
                        {book.tags.map((tag, idx) => (
                            <span key={idx} className="rounded-2xl border-2 bg-[#23be0a0d] text-[#23BE0A] text-center px-2 py-1"> #{tag}</span>
                        ))}
                    </div>
                    <hr className="mt-4 lg:w-[500px]" />
                    <p className="lg:text-[20px] worksans mt-4 font-semibold">Number of Pages: <span className="font-normal">{book.totalPages}</span></p>
                    <p className="lg:text-[20px] worksans mt-4 font-semibold">Publisher: <span className="font-normal">{book.publisher}</span></p>
                    <p className="lg:text-[20px] worksans mt-4 font-semibold">Year of Publishing: <span className="font-normal">{book.yearOfPublishing}</span></p>
                    <p className="lg:text-[20px] worksans mt-4 font-semibold">Rating: <span className="font-normal">{book.rating}</span></p>
                    <div className="mt-4 flex flex-col lg:flex-row justify-normal gap-4">
                        <button className="btn bg-white border-2 border-black text-xl">Read</button>
                        <button className="btn bg-[#50B1C9] text-white text-xl">Wishlist</button>
                    </div>

                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default BookDetails;