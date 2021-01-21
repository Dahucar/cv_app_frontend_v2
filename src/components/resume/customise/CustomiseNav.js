import React from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { EducationsScreen } from "./EducationsScreen";
import { ExperiencesScreen } from "./ExperiencesScreen";
import { OthersScreen } from "./OthersScreen";
import { SkillsScreen } from "./SkillsScreen";

export const CustomiseNav = () => {
  return (
    <div id="layoutSidenav_content">
      <main className="main">
        <Nav className="sb-sidenav-dark" justify variant="tabs" defaultActiveKey="/customise-resume/skills">
          <Nav.Item>
           <NavLink className="nav-link" activeClassName="active" to="/customise-resume/skills">Skills</NavLink>
          </Nav.Item>
          <Nav.Item>
           <NavLink className="nav-link" activeClassName="active" to="/customise-resume/education">Education</NavLink>
          </Nav.Item>
          <Nav.Item>
           <NavLink className="nav-link" activeClassName="active" to="/customise-resume/experience">Experience</NavLink>
          </Nav.Item>
          <Nav.Item>
           <NavLink className="nav-link" activeClassName="active" to="/customise-resume/other">Other</NavLink>
          </Nav.Item>
        </Nav>
        <Switch>
          <Route exact path="/customise-resume/skills" component={SkillsScreen} />
          <Route exact path="/customise-resume/education" component={EducationsScreen} />
          <Route exact path="/customise-resume/experience" component={ExperiencesScreen} />
          <Route exact path="/customise-resume/other" component={OthersScreen} />
          <Redirect to="/customise-resume" />
        </Switch>
      </main>
    </div>
  );
};
