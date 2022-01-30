import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskTrackerApp from "./components/TaskTracker/TaskTrackerApp"
import IssueReportApp from "./components/IssueReport/IssueReportApp.js"
import LandingPage from "./components/LandingPage";
import TeslaApp from "./components/Tesla/TeslaApp";
import DisneyApp from "./components/Disney/DisneyApp";
import Header from "./components/Disney/Header";
import Detail from "./components/Disney/Detail";
import Login from "./components/Disney/Login";
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
import Bever from "./components/Bever/Bever"
import DuoMain from "./components/Duo/DuoMain"
import JumboLayout from "./components/Jumbo/JumboLayout";

const App = () => {

  return (
    <div>
      <Router> 
        <Routes>
          <Route exact path="/" element={<LandingPage/>}>
          </Route>
          <Route path="/tasktracker" element={<TaskTrackerApp/>}>
          </Route>
          <Route exact path="/issuereport" element={<IssueReportApp/>}>
          </Route>
          <Route exact path="/tesla" element={<TeslaApp/>}>
          </Route>
          <Route exact path="/rik" element={
            <>
            <TeslaApp></TeslaApp>
            </>
          }>
          </Route>
          <Route exact path="/disney/detail/:id" element={
            <>
              <Header></Header>
              <Detail/>
            </>
            }>
          </Route>
          <Route exact path="/disney/login" element={
            <>
              <Header></Header>
              <Login/>
            </>}>
          </Route>
          <Route exact path="/disney/home" element={<DisneyApp/>}>
          </Route>
          <Route exact path="/disney" element={<DisneyApp/>}>
          </Route>
          <Route exact path="/duo" element={<DuoMain/>}>
          </Route>
          <Route exact path="/clubhouse/getUsername" element={
            <>
              <PlanLayout>
                <ClubHouseApp/>
              </PlanLayout>
            </>
          }>
          </Route>          
          <Route exact path="/clubhouse/phoneconfirmation" element={
            <>
              <PlanLayout>
                <PhoneConfirmation/>
              </PlanLayout>
            </>
          }>
          </Route>
          <Route exact path="/clubhouse/codeconfirm" element={
            <>
            <PlanLayout>
              <CodeConfirm/>
            </PlanLayout>
            </>
          }>
          </Route>
          <Route exact path="/clubhouse/allownotification" element={
        	<>
            <PlanLayout>
              <AllowNotification/>
            </PlanLayout>
          </>            
          }>
          </Route>
          <Route exact path="/clubhouse/explore" element={
            <>
            <PlanLayout>
              <ClubHouseHeader/>
            </PlanLayout>
            </>
          }>
          </Route>
          <Route exact path="/clubhouse" element={
            <>
            <PlanLayout>
                <Welcome/>
            </PlanLayout>
            </>
          }>
          </Route>
          <Route exact path="/clubhouse/home" element={
          <>
            <AppLayout>
                <ClubHouseHome/>
            </AppLayout>
          </>            
          }>
          </Route>
          <Route exact path="/clubhouse/roominfocards" element={
            <>
            <AppLayout>
              <RoomInfoCards/>
            </AppLayout>
            </>
          }>
          </Route>
          <Route exact path="/clubhouse/explorer" element={
            <>
            <AppLayout>
              <Explorer/>
            </AppLayout>
            </>
          }>
          </Route>
          <Route exact path="/reduxlab" element={<ReduxMain/>}>
          </Route>
          <Route exact path="/jumbo.com/aanbiedingen" element={
            <>
              <JumboLayout page='offer'>
              </JumboLayout>
            </>
          }>
          </Route>
          <Route exact path="/jumbo.com/aanbiedingen/:id" element={
            <>
              <JumboLayout page='offer'>
              </JumboLayout>
            </>
          }>
          </Route>
          <Route exact path="/jumbo.com" element={
          <>
           <JumboLayout page='main' >
            </JumboLayout>
          </>
          }>
          </Route>
          <Route exact path="/jumbo.com/watetenwe" element={
          <>
           <JumboLayout page='watetenwe' >
            </JumboLayout>
          </>
          }>
          </Route>
          <Route exact path="/bever.nl" element={<Bever/>}>
          </Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;