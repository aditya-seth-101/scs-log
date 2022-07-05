import { useState, createContext } from 'react';
import './App.css';
import Test from './Test';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Mainpage from './Mainpage';
export const UserContext = createContext();
function App() {

  const [user, setUser] = useState("Jesse Hall");
  return (
    <div className="App">
      <UserContext.Provider value={user}>

        <Routes>
          <Route path='/' element={<Login setUser={setUser} />} />
          <Route path='/test' element={<Test />} />
          <Route path='/register' element={<Register />} />
          <Route path='//main-page' element={<Mainpage />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
