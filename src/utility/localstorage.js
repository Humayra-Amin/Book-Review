const getStoredReadBooks = () => {
    const storedReadBooks = localStorage.getItem('read-books');
    if (storedReadBooks) {
        return JSON.parse(storedReadBooks);
    }
    return [];
}

const saveReadBooks = bookId => {
    const storedReadBooks = getStoredReadBooks();
    const existReadBooks = storedReadBooks.find(bookId => bookId === bookId);
    if (!existReadBooks) {
        storedReadBooks.push(bookId);
        localStorage.setItem('read-books', JSON.stringify (storedReadBooks));
    }

}

export { getStoredReadBooks, saveReadBooks }