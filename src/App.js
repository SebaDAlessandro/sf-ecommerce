import './App.css';
import { Route, Routes } from 'react-router-dom'
import { Header, Footer } from './components'
import { Admin, Contact, Home, Login, Register, Reset } from './pages'


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/reset' element={<Reset />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
