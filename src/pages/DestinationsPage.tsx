import React, { FC } from "react";
import InnerNav from "../components/InnerNav";
import { Outlet } from "react-router-dom";
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
  return (
    <>
      <InnerNav data={data} />
      <Outlet />
    </>
  );
};

export default DestinationsPage;
