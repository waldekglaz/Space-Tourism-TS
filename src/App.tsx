import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainNav from "./components/MainNav";
import HomePage from "./pages/HomePage";
import DestinationsPage from "./pages/DestinationsPage";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";
import NoMatch from "./components/NoMatch";
import CrewMember from "./components/CrewMember";
import TechnologyName from "./components/TechnologyName";
import "./App.scss";
import jsonData from "../data.json";

interface Data {
  destinations: string[];
  crew: string[];
  technology: string[];
}
function App() {
  const [data, setData] = useState<Data>(jsonData);

  return (
    <>
      <MainNav data={data} />
      <Routes>
        <Route index element={<HomePage />} />
        {/* ----- TODO render dynamically ----- */}
        <Route path="destinations" element={<DestinationsPage data={data.destinations} />}>
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
