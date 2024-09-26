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
//this is the layout which is shown as navbar and footer for all pages
const Layout =()=>{
  return(
    <>
      <Nav/>
      <>
        <Outlet/>
      </>
      <Footer/>
    </>
  )
}
//home page for introduction
const Home =()=>{
  return(
    <>
      <Header/>
      <Product/>
      <Ads/>
    </>
  )
}
//in this main navigation takes part means page routing
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<About wdth={true}/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/signin' element={<SignIn/>} />
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;