import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

export const ResumeNavbar = () => {
  const history = useHistory();
  const handlerToggle = () => {
    document.body.classList.toggle("sb-sidenav-toggled");
  };

  const handlerExit = () => {
    history.replace("/");
  }

  const icoDrop = (<i className="fas fa-sign-out-alt"></i>);
  return (
    <Navbar
      className="sb-topnav navbar navbar-expand navbar-dark bg-dark"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Link className="navbar-brand" to="/wellcome" >DAHUCAR CV APP</Link>
      <button onClick={ handlerToggle } className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle">
        <i className="fas fa-bars text-white"></i>
      </button>
      <Nav className="mr-auto">
        <Link className="navbar-brand" to="/about" >about</Link>
      </Nav>
      <Nav>
        <Nav.Link className="btn btn-danger text-white" onClick={ handlerExit }>logout { icoDrop }</Nav.Link>
      </Nav>
    </Navbar>
  );
};
