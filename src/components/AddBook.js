import React, { useContext } from 'react';
import BookForm from './BookForm';
import BooksContext from '../context/BooksContext';
import { useNavigate  } from 'react-router-dom'

const AddBook = ({ history }) => {
  const { books, setBooks } = useContext(BooksContext);
  const test = useNavigate ();
  const handleOnSubmit = (book) => {
    setBooks([book, ...books]);
    test('/');
  };
  const mystyle = {
    color: "black",
    backgroundColor: "#C5C5C5",
    padding: "30px",
    fontFamily: "Arial",
    display: "flex",
  alignItems: "center",
  justifyContent: "center",
  };
  return (
    <React.Fragment>
      <div style={mystyle}>
      <BookForm handleOnSubmit={handleOnSubmit} />
      </div>
      
    </React.Fragment>
  );
};

export default AddBook;
