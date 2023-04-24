import React, { FC } from "react";
import InnerNav from "../components/InnerNav";
import { Outlet, useParams } from "react-router-dom";

interface DestintionData {
  description: string;
  distance: string;
  images: { png: string; webp: string };
  name: string;
  travel: string;
}
interface Props {
  data: DestintionData[];
}

const DestinationsPage: FC<Props> = ({ data }) => {
  const { destination } = useParams();
  const destinationData = data.find((el) => el.name === destination);

  return (
    <main>
      <div className="page destination-page">
        <div className="page__info">
          <span>01</span>Pick your destination
        </div>
        

        <Outlet context={[destinationData]} ></Outlet>
        <InnerNav data={data} className="destination-nav" />
      </div>
      
    </main>
  );
};

export default DestinationsPage;
