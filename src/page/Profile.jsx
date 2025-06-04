import React from "react";
import { redirect } from "react-router";
import { customFetch } from "../Util";
import UserData from "../components/UserData";
import UserProfitonal from "../components/UserProfitonal";
import UserAdders from "../components/UserAdders";
import { useSelector } from "react-redux";
import Model from "../components/Model";
import SectiontPage from "../components/SectiontPage";
// eslint-disable-next-line react-refresh/only-export-components
export const loder = (store) => async () => {
  const user = store.getState().userState.user;
  if (!user) {
    return redirect("/Login");
  }
  try {
    const respones = await customFetch.get("/profile", {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    return respones.data;
  } catch (error) {
    console.log(error);
  }
};
function Profile() {
  const isopenmodel = useSelector((state) => state.userState.ismodeleidt);
  return (
    <>
      {isopenmodel ? <Model /> : null}
      <div className="container py-20">
        <SectiontPage titel={"Profile"} />
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
          <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
            Profile
          </h3>
          <UserData />
          <UserProfitonal />
          <UserAdders />
        </div>
      </div>
    </>
  );
}

export default Profile;
