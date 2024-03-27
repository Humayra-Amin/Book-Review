
const ListedBooks = () => {
    return (
        <div className="container mx-auto w-10/12 lg:w-4/5">
            <div className="text-center my-16">
                <h2 className="text-4xl lg:text-4xl flex items-center justify-center worksans font-extrabold bg-[#1313130D] rounded-xl h-[100px]">Books</h2>
            </div>
            <div>
                <div role="tablist" className="tabs tabs-lifted">
                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 1" />
                    <div role="tabpanel" className="tab-content bg-base-100 p-6">Tab content 1</div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 2" checked />
                    <div role="tabpanel" className="tab-content bg-base-100 rounded-box p-6">Tab content 2</div>

                </div>
            </div>
        </div>
    );
};

export default ListedBooks;