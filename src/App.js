import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contacts from './components/Contacts/Contacts';
import Header from './components/Header';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='' element={<Welcome/>}/>
        <Route path='contacts' element={<Contacts/>}/>
      </Routes>
    </div>
  );
}

export default App;
