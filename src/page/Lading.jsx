import React from "react";
import SectionOne from "../components/SectionOne";
import FautarProducts from "../components/FautarProducts";
import SecctionTwo from "../components/SecctionTwo";
import { customFetch } from "../Util";
const url = "/products?per_page=3";
const fauteerProductquery = {
  querykey: ["featured"],
  queryFn: () => customFetch(url),
};
// eslint-disable-next-line react-refresh/only-export-components
export const loader = (queryClient) => async () => {
  const resp = await queryClient.ensureQueryData(fauteerProductquery);
  return resp.data.data;
};
function Lading() {
  return (
    <>
      <SectionOne />
      <FautarProducts />
      <SecctionTwo />
    </>
  );
}

export default Lading;
