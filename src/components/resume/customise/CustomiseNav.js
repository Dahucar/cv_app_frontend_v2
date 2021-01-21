import React from "react";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { EducationsScreen } from "./EducationsScreen";
import { ExperiencesScreen } from "./ExperiencesScreen";
import { OthersScreen } from "./OthersScreen";
import { SkillsScreen } from "./SkillsScreen";

export const CustomiseNav = () => {
  return (
    <div id="layoutSidenav_content">
      <main className="">
        <Nav justify variant="tabs" defaultActiveKey="/customise-resume">
          <Nav.Item>
           <Link className="nav-link" to="/customise-resume/skills">Skills</Link>
          </Nav.Item>
          <Nav.Item>
           <Link className="nav-link" to="/customise-resume/education">Education</Link>
          </Nav.Item>
          <Nav.Item>
           <Link className="nav-link" to="/customise-resume/experience">Experience</Link>
          </Nav.Item>
          <Nav.Item>
           <Link className="nav-link" to="/customise-resume/other">Other</Link>
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
