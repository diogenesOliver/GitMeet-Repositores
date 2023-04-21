import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { MainPage } from './pages/MainPage';
import { Repositories } from './pages/Repositories';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/repositories' element={<Repositories/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;