import banner from '../../assets/images/banner.png'
const Banner = () => {
    return (
        <div className="container mx-auto my-5 w-[310px] lg:w-4/5">
            <div className="hero min-h-screen bg-[#1313130d] rounded-lg">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} className=" rounded-lg shadow-2xl" />
                    <div className="p-8">
                        <h1 className="lg:text-5xl text-3xl font-bold lg:py-16 py-4 playfair lg:leading-[84px]">Books to freshen up <br></br> your bookshelf</h1>
                        <button className="btn bg-[#23BE0A] text-white">View The List</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;