import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TaskTrackerApp from "./components/TaskTracker/TaskTrackerApp"
import IssueReportApp from "./components/IssueReport/IssueReportApp.js"
import LandingPage from "./components/LandingPage";
import TeslaApp from "./components/Tesla/TeslaApp";
import DisneyApp from "./components/Disney/DisneyApp";
import Header from "./components/Disney/Header";
import Detail from "./components/Disney/Detail";
import Login from "./components/Disney/Login";
import Jumbo from "./components/Jumbo/Jumbo";
import ClubHouseApp from "./components/Clubhouse/ClubHouseApp";
import PhoneConfirmation from "./components/Clubhouse/pages/PhoneConfirmation";
import PlanLayout from './components/Clubhouse/layouts/PlanLayout'
import CodeConfirm from "./components/Clubhouse/pages/CodeConfirm";
import AllowNotification from  "./components/Clubhouse/pages/AllowNotification";
import ClubHouseHome from  "./components/Clubhouse/pages/ClubHouseHome";
import AppLayout from './components/Clubhouse/layouts/AppLayout'
import Welcome from "./components/Clubhouse/pages/Welcome";
import ClubHouseHeader from './components/Clubhouse/components/ClubHouseHeader'
import ReduxMain from "./components/ReduxLab/ReduxMain";
import RoomInfoCards from "./components/Clubhouse/components/RoomInfoCards"
import Explorer from "./components/Clubhouse/pages/Explorer"

const App = () => {

  return (
    <div>
      <Router> 
        <Switch>
          <Route exact path="/tasktracker">
            <TaskTrackerApp/>
          </Route>
          <Route exact path="/issuereport">
            <IssueReportApp/>
          </Route>
          <Route exact path="/tesla">
            <TeslaApp/>
          </Route>
          <Route exact path="/disney/detail/:id">
            <Header></Header>
            <Detail/>
          </Route>
          <Route exact path="/disney/login">
            <Header></Header>
            <Login/>
          </Route>
          <Route exact path="/disney/home">
            <DisneyApp/>
          </Route>
          <Route exact path="/disney">
            <DisneyApp/>
          </Route>
          <Route exact path="/clubhouse/getUsername">
            <PlanLayout>
              <ClubHouseApp/>
            </PlanLayout>
          </Route>          
          <Route exact path="/clubhouse/phoneconfirmation">
            <PlanLayout>
              <PhoneConfirmation/>
            </PlanLayout>
          </Route>
          <Route exact path="/clubhouse/codeconfirm">
            <PlanLayout>
              <CodeConfirm/>
            </PlanLayout>
          </Route>
          <Route exact path="/clubhouse/allownotification">
            <PlanLayout>
              <AllowNotification/>
            </PlanLayout>
          </Route>
          <Route exact path="/clubhouse/explore">
            <PlanLayout>
              <ClubHouseHeader/>
            </PlanLayout>
          </Route>
          <Route exact path="/clubhouse">
            <PlanLayout>
                <Welcome/>
            </PlanLayout>
          </Route>
          <Route exact path="/clubhouse/home">
            <AppLayout>
                <ClubHouseHome/>
            </AppLayout>
          </Route>
          <Route exact path="/clubhouse/roominfocards">
            <AppLayout>
              <RoomInfoCards/>
            </AppLayout>
          </Route>
          <Route exact path="/clubhouse/explorer">
            <AppLayout>
              <Explorer/>
            </AppLayout>
          </Route>
          <Route exact path="/">
            <LandingPage/>
          </Route>
          <Route exact path="/reduxlab">
            <ReduxMain/>
          </Route>
          <Route exact path="/jumbo.com">
            <Jumbo/>
          </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;