import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Lecturers from './pages/Lecturers/Lecturers'
import Users from './pages/Users/Users'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Dashboard/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='users' element={<Users/>}/>
            <Route path='lecturers' element={<Lecturers/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
