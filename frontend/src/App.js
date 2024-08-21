import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import Nav from './pages/Nav';
import NotFound from './components/NotFound';
import Header from './pages/Header';
import Product from './pages/Product';
import Ads from './pages/Ads';
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
    <div className='w-full flex flex-col items-center gap-4'>
      <Header/>
      <Product/>
      <Ads/>
    </div>
  )
}
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index path='/' element={<Home/>} />
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;