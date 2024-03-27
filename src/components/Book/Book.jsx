import { Link } from 'react-router-dom';
import ratings from '../../assets/images/ratings.svg'

const Book = ({ book }) => {
    const { image, bookName, publisher, category, rating, tags, bookId } = book;
    return (
        <Link to={`/book/${bookId}`} className="card lg:w-96 bg-base-100 shadow-xl border-2">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl bg-[#F3F3F3] h-[230px] w-[350px] object-contain" />
            </figure>
            <div className="card-body">
                <div className="flex flex-col lg:flex-row lg:gap-14 gap-6">
                    {tags.map((tag, idx) => (
                        <span key={idx} className="rounded-2xl border-2 bg-[#23be0a0d] text-[#23BE0A] text-center px-2 py-1">{tag}</span>
                    ))}
                </div>
                <h2 className="card-title playfair lg:text-2xl">{bookName}</h2>
                <p className="lg:text-[16px] worksans">By: {publisher}</p>
                <hr className="border-dashed border" />
                <div className="card-actions flex lg:flex-row lg:gap-10">
                    <p className="">{category}</p>
                    <div className='flex lg:flex-row gap-2'>
                        <p>{rating}</p>
                        <img src={ratings} alt="" />
                    </div>
                </div>
            </div>
            </Link>
        
    );
};

export default Book;