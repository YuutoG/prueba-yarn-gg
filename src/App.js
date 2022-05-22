import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import { Box } from '@mui/material';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Box src={{ width: '100%', maxWidth: 500}}>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='blogs' element={<Blogs/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='*' element={<NoPage/>} />
          </Route>
        </Routes>
        </BrowserRouter>
        </Box>
    </div>
  );
}

export default App;
