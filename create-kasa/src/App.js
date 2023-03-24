import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';

import Navigation from './components/navigation/Navigation';

import About from './pages/about/About';
import Home from './pages/home/Home';
import NotFound from './pages/notfound/NotFound'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
