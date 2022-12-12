import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Home from './components/Home';
// components
import NavBar from './components/NavBar';
import { Resources } from './components/Resources';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/resource' element={<Resources />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
