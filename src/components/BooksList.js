import React, { useContext } from 'react';
import _ from 'lodash';
import Book from './Book';
import BooksContext from '../context/BooksContext';
import { Form, Button } from 'react-bootstrap';

import './style.css';

const BooksList = () => {
  const { books, setBooks } = useContext(BooksContext);

  const handleRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  
  const mystyle = {
  margin:"40px 10px",
    display: "flex",
  alignItems: "center",
  justifyContent: "center",
  };
 function  printReceipt (){ 
    window.print();
  }
  
 
  return (
    <React.Fragment>
      <div className="hide-on-print"> 
      <div     style={mystyle}><Form.Control
          className="input-control"
            type="date"
            name="date"
           
          />
          <Form.Control
            className="input-control"
            type="date"
            name="date"
           
          /></div>
         </div>
     <div style={mystyle}>   <button className="hide-on-print" >Search</button></div>
    
      <div style={mystyle}>
      <table className="table">
          <thead>
            <tr>
            <th>Date</th>
              <th>Item</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
        {!_.isEmpty(books) ? (
          books.map((book) => (
            <Book key={book.id} {...book} handleRemoveBook={handleRemoveBook} />
          ))
        ) : (
          <p className="message">No Products available. Please add Products </p>
        )}
          </tbody>
         </table>
        

      </div>
      <br></br>
         <button className="hide-on-print" onClick={printReceipt}>Print</button> 
         
    </React.Fragment>
  );
};

export default BooksList;
