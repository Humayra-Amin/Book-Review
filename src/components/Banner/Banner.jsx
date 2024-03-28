import { Link } from 'react-router-dom';
import banner from '../../assets/images/banner.png'
const Banner = () => {
    return (
        <div className="container mx-auto my-5 w-[310px] lg:w-4/5">
            <div className="hero bg-[#1313130d] rounded-lg h-[590px] lg:h-[490px]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} className=" rounded-lg shadow-2xl lg:h-[394px] h-[294px]" />
                    <div className="p-8">
                        <h1 className="lg:text-5xl text-3xl font-bold lg:py-16 py-4 playfair lg:leading-[84px]">Books to freshen up <br></br> your bookshelf</h1>
                        <Link to="/listedbooks">
                        <button className="btn bg-[#23BE0A] text-white hover:bg-white hover:text-black hover:border-green-500">View The List</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;