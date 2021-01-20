import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { PasswordScreen } from "../components/auth/PasswordScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";
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
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/reset-password" component={PasswordScreen} />
          <Route path="/dashboard" component={ResumeContent} />
          <Route path="/dashboard/config" component={ResumeContent} />
        </Switch>
      </div>
    </Router>
  );
};
