import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import logo from '../logo.svg';

function MyNavbar(prop) {

    return (
        <React.Fragment>            
            <Navbar bg="dark" variant='dark' expand="lg" >
                <Navbar.Brand onClick={() => prop.action('home')} style={{cursor: 'pointer'}}><img src={logo} className="App-logo myLogo" alt="logo"/>Firts Steps</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" activeKey={prop.active}>
                    <Nav.Link eventKey={1} onClick={() => prop.action('home')}>Calculator</Nav.Link>
                    <Nav.Link eventKey={2} onClick={() => prop.action('about')}>About This</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    )
}

export default MyNavbar
