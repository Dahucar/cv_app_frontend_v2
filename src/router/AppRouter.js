import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { ConfigScreen } from "../components/auth/ConfigScreen";
import { LoginScreen } from "../components/auth/LoginScreen";
import { PasswordScreen } from "../components/auth/PasswordScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";
import { CustomiseNav } from "../components/resume/customise/CustomiseNav";
import { ResumeContent } from "../components/resume/ResumeContent";
import { ResumeNavbar } from "../components/resume/ResumeNavbar";
import { ResumeSidebar } from "../components/resume/ResumeSidebar";
import { WellcomeScreen } from "../components/views/WellcomeScreen";

export const AppRouter = () => {
  return (
    <Router>
      <ResumeNavbar />
      <div id="layoutSidenav">
        {/* Navbar her */}
        <ResumeSidebar />
        {/* Variable content */}
        <Switch>
          <Route exact path="/" component={WellcomeScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route exact path="/reset-password" component={PasswordScreen} />
          <Route exact path="/config-account" component={ConfigScreen} />
          <Route exact path="/dashboard" component={ResumeContent} />
          <Route path="/customise-resume" component={CustomiseNav} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
