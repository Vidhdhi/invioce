import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const mystyle = {
  marginRight: '10px',
  borderRadius: '3px',
  border: '1px solid #ddd',
  padding: '5px',
  background: '#f2f2f2',
  background: "-moz-linear-gradient(top, #f2f2f2 0%, #ebebeb 42%, #dddddd 47%, #cfcfcf 100%)",
  background: "-webkit-linear-gradient(top, #f2f2f2 0%, #ebebeb 42%, #dddddd 47%, #cfcfcf 100%)",
  background:"  linear-gradient(to bottom, #f2f2f2 0%, #ebebeb 42%, #dddddd 47%, #cfcfcf 100%)",
  filter:"  progid: DXImageTransform.Microsoft.gradient( startColorstr='#f2f2f2', endColorstr='#cfcfcf', GradientType=0)",
  transition: "all 0.1s ease-in",
  border: "1px solid #707070",

margin:"10px 5px"
};


const Header = () => {
  return (
    <header className="hide-on-print" >
     
      <div style={{marginTop:"70px"}} >
      <NavLink to="/invoice" className="link" activeClassName="active">
        <button style={mystyle} >Invoice </button>  
        </NavLink>  <br></br>
      <NavLink to="/add" className="link" activeClassName="active">
        <button style={mystyle} >Product </button>  
        </NavLink>  <br></br>
        <NavLink to="/" className="link" activeClassName="active" exact>
        <button  style={mystyle} >Reports </button>  
        </NavLink>  <br></br>
      
       
      </div>
    </header>
  );
};

export default Header;
