import React from "react";
import { Form, Link, redirect } from "react-router";
import LogoAouth from "../components/LogoAouth";
import Togelthemes from "../components/Togelthemes";
import { customFetch } from "../Util/index";
import { clearerrors, seterrorsmasge } from "../features/User/userSlice";
import { toast } from "sonner";
import FormreaetPss from "../components/FormreaetPss";

// eslint-disable-next-line react-refresh/only-export-components
export const action =
  (store) =>
  async ({ request }) => {
    const url = decodeURIComponent(request.url);
    console.log(url);
    const params = Object.fromEntries([...new URL(url).searchParams.entries()]);
    const formData = await request.formData();
    formData.append("token", params.token);
    formData.append("email", params.email);
    const UserData = Object.fromEntries(formData);
    try {
      store.dispatch(clearerrors());
      const respones = await customFetch.post("/reset-password", UserData);
      toast.success("successfully Rest Password", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      });
      console.log(respones);
      return redirect("/Login");
    } catch (error) {
      if (error.response.status == 422) {
        store.dispatch(seterrorsmasge(error.response.data.errors));
        toast.error(error.response.data.message, {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        });
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
function ResetPassword() {
  return (
    <>
      <div className="relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0">
        <div className="relative flex flex-col justify-center w-full h-screen dark:bg-gray-900 sm:p-0 lg:flex-row">
          <Form method="POST" className="flex flex-col flex-1 w-full lg:w-1/2">
            <FormreaetPss />
          </Form>
          <LogoAouth />
          <Togelthemes />
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
