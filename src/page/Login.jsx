import React from "react";
import { Form } from "react-router";
import FormAouth from "../components/FormAouth";
import LogoAouth from "../components/LogoAouth";
import Togelthemes from "../components/Togelthemes";
import { customFetch } from "../Util/index";
import {
  loginUser,
  clearerrors,
  seterrorsmasge,
} from "../features/User/userSlice";
import { toast } from "sonner";
import { redirect } from "react-router";
// import { useDispatch } from "react-redux";
// eslint-disable-next-line react-refresh/only-export-components
export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const UserData = Object.fromEntries(formData);
    console.log(UserData);

    try {
      store.dispatch(clearerrors());
      const respones = await customFetch.post("/login", UserData);
      store.dispatch(loginUser(respones.data));
      return redirect("/");
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
function Login() {
  return (
    <>
      <div className="relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0">
        <div className="relative flex flex-col justify-center w-full h-screen dark:bg-gray-900 sm:p-0 lg:flex-row">
          <Form method="POST" className="flex flex-col flex-1 w-full lg:w-1/2">
            <FormAouth />
          </Form>
          <LogoAouth />
          <Togelthemes />
        </div>
      </div>
    </>
  );
}

export default Login;
