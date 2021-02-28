import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import Logo from '../../image/amazonLogo.png'
import classes from './Header.module.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Review from "../About/Review";
import Shop from '../Shop/Shop'
import Services from "../Services/Services";
const Header = (props) => {
  let cart = props.cart
  return (
    <>
      <Router>
        <div>
          <Navbar
            sticky="top"
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
          >
            <div className="container">
              <Navbar.Brand>
                <Link to="/">
                  <img src={Logo} alt="" className={classes.img} />
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Option />
                <Form inline style={{ width: "50%", position: "relative" }}>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-4 w-100"
                  />
                  <Button
                    variant="primary"
                    className={classes.searchBtn}
                    type="button"
                  >
                    <i className="fas fa-search"></i>
                  </Button>
                </Form>
              </Navbar.Collapse>
            </div>
          </Navbar>
          <Navbar className={classes.navbar} variant="light">
            <Nav className="m-auto">
              <Nav.Link>
                <Link to="/shop">Shop</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/review">Review</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/services">Services</Link>
              </Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
            <Route path="/review">
              <Review />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/">
              <Shop />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default Header;

function Option() {
  return (
    <>
      <select name="" id="">
        <option value="Bangladesh">Bangladesh</option>
        <option value="Pakistan">Pakistan</option>
        <option value="USA">USA</option>
        <option value="Iran">Iran</option>
      </select>
    </>
  );
}
