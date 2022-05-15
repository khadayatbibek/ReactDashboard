import Home from "./pages/home/Home";

import Job from "./pages/jobs/Job";
import User from "./pages/users/User";

import NewUser from "./pages/newuser/NewUser";
import NewJob from "./pages/newjob/NewJob"
import NotFound from "./pages/notfound/Notfound";
import {  userInputs } from "./pages/newuser/formUserInputFields";
import { JobsInputs } from "./pages/newjob/formJobInputFields";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewUser from "./pages/newuser/ViewUser";
import ViewJob from './pages/newjob/ViewJob';
import EditUser from "./pages/newuser/EditUser";
import EditJob from "./pages/newjob/EditJob";
import KornaVisu from './pages/visualization/KornaVisu';
import Report from "./pages/report/Report";





function App() {
  

  return (
    <div >
      <BrowserRouter>
        <Routes>
          
          <Route exact path="/" element={< Home />}></Route>
            
          <Route exact path="users" element={<User />}></Route>
          <Route exact path="users/:id" element={<ViewUser />}></Route>
          <Route exact path="users/new" element={<NewUser inputs={userInputs} title="Register New User" />}></Route>
          <Route exact path="/users/edit/:id" element={<EditUser />}></Route>


          <Route exact path="jobs" element={<Job />}></Route>
          <Route exact path="jobs/:id" element={<ViewJob />}></Route>
          <Route exact path="jobs/new" element={<NewJob inputs={JobsInputs} title="Add New Job" />}></Route>
          <Route exact path="/jobs/edit/:id" element={<EditJob />}></Route>


          <Route exact path="visualization" element={<KornaVisu />}></Route>
          <Route exact path="report" element={<Report />}></Route>
          

          <Route exact path="*" element={<NotFound />}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
