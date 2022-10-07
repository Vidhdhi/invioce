import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const InvoiceForm = (props) => {
  const [book, setBook] = useState(() => {
    return {
      customer: props.book ? props.book.customer : '',
      proID: props.book ? props.book.proID : '',
      quantity: props.book ? props.book.quantity : '',
      price: props.book ? props.book.price : '',
      date: props.book ? props.book.date : '',
      des: props.book ? props.book.des : '',
      invoiceID: props.book ? props.book.invoiceID : ''
    };
  });

  const [errorMsg, setErrorMsg] = useState('');
  const {date, customer, proID,des,invoiceID, price, quantity } = book;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [date,customer, des,invoiceID,proID, price, quantity];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const book = {
        id: uuidv4(),
        customer,
        proID,
        price,
        quantity,
        des,invoiceID,
        date: new Date()
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
     
        <br></br>
      <Form.Group controlId="invoiceID">
          <Form.Label style={{textAlign: "left",margin:"0px 20px"}}>Product ID</Form.Label>
          <br></br>
          <Form.Control
            className="input-control"
            type="number"
            name="invoiceID"
            value={invoiceID}
           
            onChange={handleInputChange}
          />
        </Form.Group>
        <br></br> <br></br>
        <Form.Group controlId="name">
          <Form.Label style={{margin:"0px 20px"}}>Product Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="customer"
            value={customer}
          
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
          Save
        </button>
        <button  style={mystyle} variant="primary" type="submit" className="submit-btn">
          Update
        </button>
        <button  style={mystyle} variant="primary" type="submit" className="submit-btn">
          Clear
        </button>
      </Form>
    </div>
  );
};

export default InvoiceForm;
