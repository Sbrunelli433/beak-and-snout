import logo from './logo.svg';
import { Routes, Route, Navigate } from "react-router-dom";

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';
import About from './routes/about/about.component';
import Contact from './routes/contact/contact.component';
import Footer from './components/footer/footer.component';

import './App.css';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" index element={<Home />} />
        <Route path="shop/*" index element={<Shop />} />
        <Route path="about" index element={<About />} />
        <Route path="contact" index element={<Contact />} />
      </Route>
    </Routes>
    <Footer />
    </Fragment>
  );
}

export default App;
