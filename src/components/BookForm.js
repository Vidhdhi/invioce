import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const BookForm = (props) => {
  const [book, setBook] = useState(() => {
    return {
      productName: props.book ? props.book.productName : '',
      proID: props.book ? props.book.proID : '',
      quantity: props.book ? props.book.quantity : '',
      price: props.book ? props.book.price : '',
      date: props.book ? props.book.date : ''
    };
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { date,productName, proID, price, quantity } = book;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [date,productName, proID, price, quantity];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const book = {
        id: uuidv4(),
        productName,
        proID,
        price,
        quantity,
        date
      };
      props.handleOnSubmit(book);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'quantity':
        if (value === '' || parseInt(value) === +value) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'price':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setBook((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };
  const mystyle = {
   
    borderRadius: '3px',
    border: '1px solid #ddd',
    padding: '3px 15px 3px 15px',
    background: '#f2f2f2',
    background: "-moz-linear-gradient(top, #f2f2f2 0%, #ebebeb 42%, #dddddd 47%, #cfcfcf 100%)",
    background: "-webkit-linear-gradient(top, #f2f2f2 0%, #ebebeb 42%, #dddddd 47%, #cfcfcf 100%)",
    background:"  linear-gradient(to bottom, #f2f2f2 0%, #ebebeb 42%, #dddddd 47%, #cfcfcf 100%)",
    filter:"  progid: DXImageTransform.Microsoft.gradient( startColorstr='#f2f2f2', endColorstr='#cfcfcf', GradientType=0)",
    transition: "all 0.1s ease-in",
    border: "1px solid #707070",
  
margin:"0px 8px"
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
      <Form.Group controlId="date">
          <Form.Label style={{textAlign: "left",margin:"0px 20px"}}>Date</Form.Label>
          <br></br>
          <Form.Control
            className="input-control"
            type="date"
            name="date"
            value={date}
           
            onChange={handleInputChange}
          />
        </Form.Group>
        <br></br>
      <Form.Group controlId="proID">
          <Form.Label style={{textAlign: "left",margin:"0px 20px"}}>Invoice ID</Form.Label>
          <br></br>
          <Form.Control
            className="input-control"
            type="number"
            name="proID"
            value={proID}
           
            onChange={handleInputChange}
          />
        </Form.Group>
        <br></br> <br></br>
        <Form.Group controlId="name">
          <Form.Label style={{margin:"0px 20px"}}>Customer</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="productName"
            value={productName}
          
            onChange={handleInputChange}
          />
        </Form.Group>
        <br></br> <br></br>
        <Form.Group controlId="price">
          <Form.Label style={{margin:"0px 20px"}}>
            Product Price</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="price"
            value={price}
        
            onChange={handleInputChange}
          />
        </Form.Group>
        <br></br> <br></br>
        <Form.Group controlId="quantity">
          <Form.Label style={{margin:"0px 20px"}}>Quantity</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="quantity"
            value={quantity}
         
            onChange={handleInputChange}
          />
        </Form.Group>
        <br></br> <br></br>
       
        <button  style={mystyle}  variant="primary" type="submit" className="submit-btn">
          Process
        </button>
        
        <button  style={mystyle} variant="primary" type="submit" className="submit-btn">
          Clear
        </button>
      </Form>
    </div>
  );
};

export default BookForm;
