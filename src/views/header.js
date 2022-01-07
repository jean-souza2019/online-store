import React from 'react';
import { Navbar, Container, Nav, } from 'react-bootstrap';
import { BiStore } from 'react-icons/bi';
import { AiOutlineShoppingCart, AiOutlineGlobal } from 'react-icons/ai';

export default function Header() {
    return (
        <>
            <Navbar bg="primary" fixed="top" variant="dark">
                <Container>
                    <Navbar.Brand href="/"><AiOutlineGlobal /> Online Store</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="store"> <BiStore /> Store</Nav.Link>
                        <Nav.Link href="cart"><AiOutlineShoppingCart /> Cart</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}