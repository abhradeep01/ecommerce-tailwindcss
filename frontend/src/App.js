import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import Nav from './pages/Nav';
import NotFound from './components/NotFound';
import Header from './pages/Header';
import Product from './pages/Product';
import Ads from './pages/Ads';
import Footer from './pages/Footer';
import Contact from './components/Contact';
import About from './components/About';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
const Layout =()=>{
  return(
    <>
      <Nav/>
      <Outlet/>
    </>
  )
}
const Home =()=>{
  return(
    <>
      <Header/>
      <Product/>
      <Ads/>
      <Footer/>
    </>
  )
}
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/signin' element={<SignIn/>} />
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;