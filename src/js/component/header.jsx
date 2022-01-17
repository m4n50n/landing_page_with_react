import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import "../../styles/header.css";

function Header() {
	return (
		<>
			<Navbar bg="secondary" expand="lg">
				<Container fluid>
					<Navbar.Brand href="#">Platzi</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="me-auto my-2 my-lg-0"
							style={{ maxHeight: "100px" }}
							navbarScroll>
							<Nav.Link href="#action1">Cursos</Nav.Link>
							<Nav.Link href="#action2">Blog</Nav.Link>
							<Nav.Link href="#action3">Foro</Nav.Link>
							<Nav.Link href="#action4">Agenda</Nav.Link>
							<Nav.Link href="#action5">Tv</Nav.Link>
							<Nav.Link href="#action6">Planes</Nav.Link>
							<Nav.Link href="#action7">
								Habla con nosotros
							</Nav.Link>
						</Nav>
						<Form className="d-flex">
							<Button variant="outline-success" bg="warning">
								Iniciar Sesion
							</Button>
							<FormControl
								type="search"
								placeholder="Buscar en Platzi"
								className="me-2"
								aria-label="Search"
							/>
						</Form>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default Header;
