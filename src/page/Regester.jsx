import React from "react";
import FormAouthR from "../components/FormAouthR";
import LogoAouth from "../components/LogoAouth";
import Togelthemes from "../components/Togelthemes";
import { Form, redirect } from "react-router";
import { customFetch } from "../Util";
import { toast } from "sonner";
import { clearerrors, seterrorsmasge } from "../features/User/userSlice";
// eslint-disable-next-line react-refresh/only-export-components
export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const Data = Object.fromEntries(formData);
    const name = Data.fname + "" + Data.lname;
    formData.append("name", name);
    const UserData = Object.fromEntries(formData);
    try {
      store.dispatch(clearerrors());
      const respones = await customFetch.post("/register", UserData);
      console.log(respones);
      toast.success("is success Register");
      return redirect("/Login");
    } catch (error) {
      if (error.response.status == 422) {
        toast.error(error.response.data.message, {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        });
        store.dispatch(seterrorsmasge(error.response.data.errors));
      } else {
        toast.error(error.response.data.message, {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        });
      }
    }
  };
function Regester() {
  return (
    <>
      <Form
        method="POST"
        className="relative p-6 bg-white z-1 h-full dark:bg-gray-900 sm:p-0"
      >
        <div className="relative flex flex-col justify-center w-full h-screen dark:bg-gray-900 sm:p-0 lg:flex-row">
          <FormAouthR />
          <LogoAouth />
          <Togelthemes />
        </div>
      </Form>
    </>
  );
}

export default Regester;
