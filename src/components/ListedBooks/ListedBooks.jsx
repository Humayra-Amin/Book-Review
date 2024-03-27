
const ListedBooks = () => {
    return (
        <div className="container mx-auto w-10/12 lg:w-4/5">
            <div className="text-center my-16">
                <h2 className="text-4xl lg:text-4xl flex items-center justify-center worksans font-extrabold bg-[#1313130D] rounded-xl h-[100px]">Books</h2>
            </div>
            <div>
                <div role="tablist" className="tabs tabs-lifted">
                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" />

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" checked />

                </div>
                <div className="mt-20 rounded-xl border-2">
                    <div className="card bg-base-100 shadow-xl flex flex-col lg:flex-row">
                        <figure className="px-10 py-5">
                            <img src="../src/assets/images/great_gatsby.jpg" alt="Shoes" className="rounded-xl object-contain w-[200px]" />
                        </figure>
                        <div className="items-center mt-10 ml-4">
                            <h2 className="card-title playfair lg:text-4xl">bname</h2>
                            <p className="lg:text-[20px] worksans mt-4  font-medium">By: author</p>
                            <div className="mt-4 flex lg:flex-row lg:gap-2 gap-6">
                                <p className="text-[20px] worksans font-semibold">Tag </p>
                                <img src="../src/assets/images/location.svg" alt="" />
                                <p>yearpublish</p>
                            </div>
                            <div className="mt-4 flex lg:flex-row lg:gap-2 gap-2">
                                <img src="../src/assets/images/publisher.svg" alt="" />
                                <p>publisher</p>
                                <img src="../src/assets/images/page.svg" alt="" />
                                <p>page</p>
                            </div>
                            <hr className="my-4 lg:w-[800px]" />
                            <div className="card-actions">
                                <p className="rounded-2xl text-[16px] border-2 bg-[#328EFF26] text-[#328EFF] text-center px-2 py-1 lg:h-[42px] lg:w-auto">category: </p>
                                <p className="rounded-2xl text-[16px] border-2 bg-[#FFAC3326] text-[#FFAC33] text-center px-2 py-1 lg:h-[42px] lg:w-auto">rating: </p>
                                <button className="btn rounded-2xl text-[16px] border-2 px-2 py-1 bg-[#23BE0A] text-white h-[40px] w-[110px]">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;