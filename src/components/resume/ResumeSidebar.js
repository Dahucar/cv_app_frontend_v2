import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const ResumeSidebar = () => {
  return (
    <div id="layoutSidenav_nav">
      <Nav
        className="sb-sidenav accordion sb-sidenav-dark"
        id="sidenavAccordion"
      >
        <div className="sb-sidenav-menu">
          <div className="nav">
            <div className="sb-sidenav-menu-heading">Options</div>
            <NavLink
              to="/dashboard"
              className="nav-link"
              activeClassName="active"
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-tachometer-alt"></i>
              </div>
              Dashboard
            </NavLink>
            <NavLink
              to="/config-account"
              className="nav-link"
              activeClassName="active"
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-users-cog"></i>
              </div>
              Settings
            </NavLink>
            <NavLink
              to="/customise-resume"
              className="nav-link"
              activeClassName="active"
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-cog"></i>
              </div>
              Customise
            </NavLink>
          </div>
        </div>
        <div className="sb-sidenav-footer">
          <div className="small">Logged in as:</div>
          Start Bootstrap
        </div>
      </Nav>
    </div>
  );
};
