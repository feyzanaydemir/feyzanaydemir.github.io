import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';
import About from './components/About.js';
import Work from './components/Work.js';
import Contact from './components/Contact.js';
import './assets/styles/reset.css';
import './assets/styles/App.css';

function App() {
  const [anchors, setAnchors] = useState([]);

  useEffect(() => {
    const arr = Array.from(document.querySelectorAll('header a'));

    for (const a of arr) {
      if (
        window.location.pathname.slice(1) === a.textContent.toLocaleLowerCase()
      ) {
        a.style.textDecoration = 'underline';
        a.style.color = 'white';

        break;
      }
    }

    setAnchors(arr);
  }, []);

  const setUnderline = (name) => {
    for (const anchor of anchors) {
      if (anchor.textContent === name) {
        anchor.style.textDecoration = 'underline';
        anchor.style.color = 'white';
      } else {
        anchor.style.textDecoration = 'none';
        anchor.style.color = 'rgb(200, 200, 200)';
      }
    }
  };

  return (
    <Router>
      <header>
        <Link to="/about" onClick={() => setUnderline('About')}>
          About
        </Link>
        <Link to="/work" onClick={() => setUnderline('Work')}>
          Work
        </Link>
        <Link to="/contact" onClick={() => setUnderline('Contact')}>
          Contact
        </Link>
      </header>
      <Routes>
        <Route exact path="/" element={<Navigate to="/about" />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/work" element={<Work />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route
          path="*"
          element={
            <div className="Error">
              <h1>Oops!</h1>
              <h2>Something Went Wrong</h2>
            </div>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
