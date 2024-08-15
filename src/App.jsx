import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/home/Home';
import About from './components/about/About';
import Programs from './components/programs/Programs';
import Students from './components/students/Students';
import Gallery from './components/gallery/Gallery';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/students" element={<Students />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
