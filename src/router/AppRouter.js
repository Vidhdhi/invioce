import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BooksList from '../components/BooksList';
import useLocalStorage from '../hooks/useLocalStorage';
import EditBook from '../components/EditBook';
import BooksContext from '../context/BooksContext';
import Invoice from '../components/AddInvoice';

const AppRouter = () => {
  const [books, setBooks] = useLocalStorage('books', []);
  const mystyle = {
    color: "black",
    backgroundColor: "#C5C5C5",
    padding: "0px  50px",
    fontFamily: "Arial",
    
  alignItems: "center",
  justifyContent: "center",
  };
  return (
    <BrowserRouter>
    <div style ={mystyle}> 
      <div className='row'>
        <div  className="col-sm-3 p-3 border-end border-5 "> <Header /> </div>
     
        <div className="col-sm-9 p-3  ">
          <BooksContext.Provider value={{ books, setBooks }}>
            <Routes>
            <Route  path="/" element={<BooksList />} />
            <Route  path="/add" element={< Invoice />} />
            <Route  path="/" element={<EditBook />} />
            <Route  path="/invoice" element={<AddBook />} />

            <Route  path="/edit/:id" element={<BooksList />} />
            </Routes>
          </BooksContext.Provider>
        </div>
      </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
