export const readBooksAdd = (book) => {
    const readBook = JSON.parse(localstorage.getItem("read-books")) || [];

    if (!isReadBook) {
        readBook.push(book);

        localStorage.setItem("read-books", JSON.stringify(readBook));

        return true;
    }
    else {
        return false;
    }
};

export const wishlistAdd = (book) => {
    const wishlistBook = JSON.parse(localstorage.getItem("wishlist-books")) || [];

    const isWishlistBook = wishlistBook.find(idx => idx.bookId === book.bookId);

    if (!isWishlistBook) {
        wishlistBook.push(book);

        localStorage.setItem("wishlist-books", JSON.stringify(wishlistBook));

        return true;
    }
    else {
        return false;
    }
};

export const isReadBook = (book) => {
    const readBook = JSON.parse(localStorage.getItem("read-books")) || [];
    return readBook.some(idx => idx.bookId === book.bookId);
};

export const isWishlistBook = (book) => {
    const wishlistBook = JSON.parse(localStorage.getItem("wishlist-books")) || [];
    return wishlistBook.some(idx => idx.bookId === book.bookId);
};