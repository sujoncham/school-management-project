import { Route, Routes } from 'react-router-dom';
import './App.css';
import Classes from './components/Classes/Classes';
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
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/teachers" element={<Teachers></Teachers>}></Route>
        <Route path="/classes" element={<Classes></Classes>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/classes/:id" element={<StudentsList></StudentsList>}></Route>
        <Route path="/student/:id" element={<StudentDetails></StudentDetails>}></Route>
        <Route path="/studentData/:id" element={<StudentData></StudentData>}></Route>
        <Route path="/teachers/:id" element={<TeacherDetails></TeacherDetails>}></Route>
        <Route path="*" element={<Page404></Page404>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
