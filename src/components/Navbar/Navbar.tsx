import React from 'react'
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import './Navbar.scss'
import Button from '../Button'

interface Props {
    brandLogo: string,
    Links: Object
}
const NavbarContainer = (props: Props) => {
    const products = ['Fruits', 'Vegetables', 'Eggs', 'Milk', 'Meat', 'Fresh Drinks']
    const recipes = ['Summery salmon, beetroot & spicy mix', 'Portobello Baked Eggs with avocado & bread']

    return (
        <Navbar expand="lg" id="navbar">
            <Navbar.Brand href="#home">
                <img width="150" height="40" src={props.brandLogo} alt="brand"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="first-nav">
                    <NavDropdown title="Recipe box" id="basic-nav-dropdown">
                        {recipes.map((listItem, index) =>
                            <NavDropdown.Item href="#action/3.1" key={index}>{listItem}</NavDropdown.Item>
                        )}
                    </NavDropdown>
                    <NavDropdown title="Products" id="basic-nav-dropdown">
                        {products.map((listItem, index) =>
                            <NavDropdown.Item href="#action/3.1" key={index}>{listItem}</NavDropdown.Item>
                        )}                    </NavDropdown>
                    <Nav.Link href="#link">About us</Nav.Link>
                    <Nav.Link href="#link">Visit us</Nav.Link>
                </Nav>
                <Nav className="last-nav">
                    <Nav.Link href="#link">Login</Nav.Link>
                    <Button className="common-button" name="Create Account"></Button>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavbarContainer;