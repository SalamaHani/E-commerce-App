import React from "react";
import Header from "../components/Header";
import { Outlet, useNavigation } from "react-router";
import Hedaruser from "../components/Hedaruser";
import Footer from "../components/Footer";
import IsLoding from "../components/IsLoding";

function Home() {
  const navddtion = useNavigation();
  const isloding = navddtion.state === "loading";
  return (
    <>
      <Hedaruser />
      <Header />
      {isloding ? (
        <IsLoding />
      ) : (
        <>
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
}

export default Home;
