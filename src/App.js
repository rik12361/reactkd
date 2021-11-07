import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TaskTrackerApp from "./components/TaskTracker/TaskTrackerApp"
import IssueReportApp from "./components/IssueReport/IssueReportApp.js"
import LandingPage from "./components/LandingPage";
import TeslaApp from "./components/Tesla/TeslaApp";
import DisneyApp from "./components/Disney/DisneyApp";
import Header from "./components/Disney/Header";
import Detail from "./components/Disney/Detail";
import Login from "./components/Disney/Login";

const App = () => {

  return (
    <div>
      <Router> 
        <Switch>
          <Route path="/tasktracker">
            <TaskTrackerApp/>
          </Route>
          <Route path="/issuereport">
            <IssueReportApp/>
          </Route>
          <Route path="/tesla">
            <TeslaApp/>
          </Route>
          <Route path="/disney/detail/:id">
            <Header></Header>
            <Detail/>
          </Route>
          <Route path="/disney/login">
            <Header></Header>
            <Login/>
          </Route>
          <Route path="/disney/home">
            <DisneyApp/>
          </Route>
          <Route path="/disney">
            <DisneyApp/>
          </Route>
          <Route path="/">
            <LandingPage/>
          </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;