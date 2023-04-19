import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";
import NoMatch from "./components/NoMatch";
import "./App.css";
interface Data {
  destinations: string[];
  crew: string[];
  technology: string[];
}
function App() {
  const [data, setData] = useState<Data>({
    destinations: [],
    crew: [],
    technology: [],
  });
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("../data.json");
      const json = await response.json();
      const { destinations, crew, technology } = json;
      setData({ destinations, crew, technology });
    };
    fetchData();
  }, []);

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/destination">Destination</Link>
        <Link to="/crew">Crew</Link>
        <Link to="/technology">Technology</Link>
      </nav>

      <Routes>
        <Route index element={<Home />} />
        <Route path="destination" element={<Destination />} />
        <Route path="crew" element={<Crew />} />
        <Route path="technology" element={<Technology />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
