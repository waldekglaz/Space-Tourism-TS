import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainNav from "./components/MainNav";
import Home from "./components/Home";
import Destinations from "./components/Destinations";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";
import NoMatch from "./components/NoMatch";
import CrewMember from "./components/CrewMember";
import TechnologyName from "./components/TechnologyName";
import "./App.css";
interface Data {
  destinations: string[];
  crew: string[];
  technology: string[];
}
function App() {
  const shouldRedirect = true;
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
      <MainNav data={data} />
      <Routes>
        <Route index element={<Home />} />
        {/* ----- TODO render dynamically ----- */}
        <Route path="destinations" element={<Destinations data={data.destinations} />}>
          <Route index element={<Navigate to="Moon" />} />
          <Route path=":destination" element={<Destination data={data.destinations} />} />
        </Route>
        <Route path="crew" element={<Crew data={data.crew} />}>
          <Route index element={<Navigate to="Victor Glover" />} />
          <Route path=":crewMember" element={<CrewMember crewData={data.crew} />} />
        </Route>
        <Route path="technology" element={<Technology data={data.technology} />}>
          <Route index element={<Navigate to="Spaceport" />} />
          <Route path=":technologyName" element={<TechnologyName technologyData={data.technology} />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
