import { useState, Suspense } from 'react';
import './App.css';

import Banner from "./compononts/homepage/Banner";
import Players from './compononts/homepage/players';
import Started from "./compononts/Started";
import Prices from "./compononts/Prices";
import Section from "./compononts/Section";
import Footer from "./compononts/Footer";
import Start from "./compononts/Start";
import Navbar from "./compononts/navbar";
import Header from "./compononts/Header";

const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json(); // ⚠️ ekhane () lagbe
};

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  const playersPromise = fetchPlayer();

  return (
    <div>
      {/* ✅ Navbar e count pathalam */}
      <Navbar cartCount={cartCount} />

      <Banner />
      <Start />
      <Header />

      {/* ✅ Players e jodi lagbe future use */}
      <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
        <Players playersPromise={playersPromise} />
      </Suspense>

      <Started />

      {/* ✅ Prices e Buy button ase dhore nilam */}
      <Prices onBuy={handleAddToCart} />

      <Section />
      <Footer />
    </div>
  );
}

export default App;