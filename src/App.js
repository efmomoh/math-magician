import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Calculator from './components/Calculator';
import ShowQuote from './components/Quote';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <nav className="nav">
        <h1 className="heading">Math Magicians</h1>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="pipe">|</li>
          <span />
          <li>
            <NavLink to="/calculator">Calculator</NavLink>
          </li>
          <li className="pipe">|</li>

          <span />
          <li>
            <NavLink to="/quote">Quote</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<ShowQuote />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
