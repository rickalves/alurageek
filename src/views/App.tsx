import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Produto from './Produto';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/produto' element={<Produto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
