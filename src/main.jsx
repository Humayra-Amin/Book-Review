import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from './components/ErrorPage/ErrorPage';
import Root from './components/Root/Root';
import ListedBooks from './components/ListedBooks/ListedBooks';
import ReadPage from './components/ReadPage/ReadPage';
import Home from './components/Home/Home';
import BookDetails from './components/BookDetails/BookDetails';
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "/book/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../books.json')
      },
      {
        path: '/listedbooks',
        element: <ListedBooks></ListedBooks>
      },
      {
        path: '/pagestoread',
        element: <ReadPage></ReadPage>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contactUs',
        element: <ContactUs></ContactUs>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
