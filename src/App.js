import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Classes from './components/Classes/Classes';
import ClassSection from './components/Classes/ClassSection';
import AddClassname from './components/Dashboard/AddClassname';
import AddStudent from './components/Dashboard/AddStudent';
import AddTeacher from './components/Dashboard/AddTeacher';
import Dashboard from './components/Dashboard/Dashboard';
import HomeDashboard from './components/Dashboard/HomeDashboard';
import TeacherUpdate from './components/Dashboard/TeacherUpdate';
import Footer from './components/Footer/Footer';
import Login from './components/LoginSystem/Login';
import Register from './components/LoginSystem/Register';
import Navbar from './components/Navbar/Navbar';
import About from './components/Pages/About';
import Home from './components/Pages/Home';
import Page404 from './components/Pages/Page404';
import StudentData from './components/Students/StudentData';
import StudentDetails from './components/Students/StudentDetails';
import StudentsList from './components/Students/StudentsList';
import TeacherDetails from './components/Teacher/TeacherDetails';
import Teachers from './components/Teacher/Teachers';

function App() {
  const locaction = useLocation()
  return (
    <>
      {locaction.pathname === '/dashboard' || locaction.pathname === '/dashboard/addStudent' || locaction.pathname === '/dashboard/addTeacher' ? "" : <Navbar></Navbar>}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/teachers" element={<Teachers></Teachers>}></Route>
        <Route path="/classes" element={<Classes></Classes>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/classes/classSection/boysSection/:id" element={<StudentsList></StudentsList>}></Route>
        <Route path="/classes/classSection/girlsSection/:id" element={<StudentsList></StudentsList>}></Route>
        <Route path="/classes/classSection/:id" element={<ClassSection></ClassSection>}></Route>
        <Route path="/student/:id" element={<StudentDetails></StudentDetails>}></Route>
        <Route path="/studentData/:id" element={<StudentData></StudentData>}></Route>
        <Route path="/teachers/:id" element={<TeacherDetails></TeacherDetails>}></Route>
        <Route path="/teachers/teacherUpdate/:updateId" element={<TeacherUpdate></TeacherUpdate>}></Route>
        <Route path='/addStudent/:classId' element={<AddStudent></AddStudent>}></Route>
        <Route path="*" element={<Page404></Page404>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route index element={<HomeDashboard></HomeDashboard>}></Route>
          
          <Route path='addTeacher' element={<AddTeacher></AddTeacher>}></Route>
          <Route path='addClassname' element={<AddClassname></AddClassname>}></Route>
        </Route>
      </Routes>
      {locaction.pathname === '/dashboard' || locaction.pathname === '/dashboard/addStudent' || locaction.pathname === '/dashboard/addTeacher' ? "" :<Footer></Footer>}
    </>
  );
}

export default App;
