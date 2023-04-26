import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainNav from "./components/MainNav";
import HomePage from "./pages/HomePage";
import DestinationsPage from "./pages/DestinationsPage";
import Destination from "./components/Destination";
import CrewPage from "./pages/CrewPage";
import TechnologyPage from "./pages/TechnologyPage";
import NoMatch from "./components/NoMatch";
import Crew from "./components/Crew";
import Technology from "./components/Technology";
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
        <Route path="crew" element={<CrewPage data={data.crew} />}>
          <Route index element={<Navigate to="Victor Glover" />} />
          <Route path=":crewMember" element={<Crew crewData={data.crew} />} />
        </Route>
        <Route path="technology" element={<TechnologyPage data={data.technology} />}>
          <Route index element={<Navigate to="Spaceport" />} />
          <Route path=":technologyName" element={<Technology technologyData={data.technology} />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
