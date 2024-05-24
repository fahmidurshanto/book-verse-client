import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import AddBook from "../pages/AddBook/AddBook";
import AllBooks from "../pages/AllBooks/AllBooks";
import BorrowedBooks from "../pages/BorrowedBooks/BorrowedBooks";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addBook",
        element: <AddBook></AddBook>,
      },
      {
        path: "/allBooks",
        element: <AllBooks></AllBooks>,
      },
      {
        path: "/borrowedBooks",
        element: <BorrowedBooks></BorrowedBooks>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
