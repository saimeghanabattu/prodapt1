import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Header from './component/Header';
import Footer from './component/Footer';
import DashBoard from './component/DashBoard';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Login from './component/Login';
import SignUp from './component/SignUp';
import ContactUs from './component/ContactUs';
import Gallery from './component/Gallery';

function App() {
  return (
    <div className="App">
      <h1>Hi Welcome to REACT JS Application</h1>
      <Home />
      <BrowserRouter> 
      <Routes>
        <Route path='/dashboard' element={<DashBoard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/gallery' element={<Gallery/>}/>

      </Routes>
      <Header/>
      <Footer></Footer>

      </BrowserRouter>
    </div>
  );
}

export default App;
