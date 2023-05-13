import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';

import Navigation from './components/navigation/Navigation';

import { routes } from './routes/Routes';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navigation />
        <main>
          <Routes>
            {routes.map(({ path, element }, idx) => (
              <Route key={idx} path={path} element={element} />
            ))}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
