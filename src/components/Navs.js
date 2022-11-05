import { React } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Profileimg from './../images/profile.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../styles/Navs.scss';
import ProductsDetails from './ProductDetails';
import { addItem } from '../Redux/reducers';
import { useSelector } from 'react-redux';

const Navs = () => {
  const state = useSelector((state) => state.addItems);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <div className='container'>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
          <ul className="navbar-nav mr-auto">
            <img src={Profileimg} alt="ProfileImage" />
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Product">product</NavLink>
            </li>
          </ul>

          <ul className='navbar-nav position-absolute top-10 end-0'>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Login">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Register">Register</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">    Cart({state.length})</NavLink>
            </li>
          </ul>

        </div>

      </div>
    </nav>
    // <Navbar>
    //   <Container>
    //     <Navbar.Brand href="#home">
    //       <img src={Profileimg} alt="ProfileImage" />
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link  href="/">Home</Nav.Link>
    //         <Nav.Link href="/Product">Product</Nav.Link>
    //         <NavLink to= "/cart" className="btn">
    //           Cart({state.length})
    //       </NavLink>
    //         {/* <NavDropdown title="Cart" id="basic-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">
    //             Separated link
    //           </NavDropdown.Item>
    //         </NavDropdown> */}
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>


  );
}








export default Navs;