import { React } from 'react';
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import About from './components/Nav/About';
import Login from './components/Nav/Login';
import Signup from './components/Nav/Signup';
import UserIntern from './components/UserIntern';
import Admin from './components/Admin';
import InternEdit from './components/InternEdit';
import UpdateUserForm from './components/UpdateUserForm';
import ProfileIntern from './components/ProfileIntern';
import ProfileOrg from './components/ProfileOrg';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/userintern" element={<UserIntern/>}/>
          <Route exact path="/userintern/profile" element={<ProfileIntern/>}/>
          <Route exact path="/admin" element={<ProfileOrg/>}/>
          <Route exact path="/admin/profile" element={<InternEdit/>}/>
          <Route exact path="/admin/profile/add" element={<Admin/>}/>
          <Route exact path="/admin/profile/edit" element={<UpdateUserForm/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;
