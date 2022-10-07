import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Book = ({
  id,
  productName,
  proID,
  price,
  quantity,
  date,
  handleRemoveBook
}) => {
  const history = useNavigate();

  return (
    
      <tr>
        <td>{date}</td>
        <td>{proID}</td>
        <td>{productName}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>
          {/* <button variant="primary" onClick={() => history(`/edit/${id}`)}>
            Edit
          </button>{' '} */}
          <button  className="hide-on-print" variant="danger" onClick={() => handleRemoveBook(id)}>
            Delete
          </button>
        </td>
      </tr>
  

  );
};

export default Book;
