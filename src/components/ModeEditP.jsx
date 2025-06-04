import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form } from "react-router";
import { useSelector } from "react-redux";
import { useLoaderData } from "react-router";
import { customFetch } from "../Util";
import { toast } from "sonner";
import {
  UpdateDatauser,
  toogelModeleidt,
  seterrorsmasge,
} from "../features/User/userSlice";
import { redirect } from "react-router";
import { useState } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const action =
  (store) =>
  async ({ request }) => {
    const user = store.getState().userState.user;
    if (!user) {
      return redirect("/Login");
    }
    const formData = await request.formData();
    const Data = Object.fromEntries(formData);
    const social_links = {};
    social_links.facebook = Data.facebook ?? "";
    social_links.linkedin = Data.linkedin ?? "";
    social_links.twitter = Data.twitter ?? "";
    social_links.instagram = Data.instagram ?? "";
    Data.social_links = social_links;

    try {
      const respones = await customFetch.post(
        "/profile",
        {
          ...Data,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      store.dispatch(toogelModeleidt());
      store.dispatch(UpdateDatauser(respones.data));
      return redirect("/Profile");
    } catch (error) {
      store.dispatch(seterrorsmasge(error.response.data.errors));
      toast.error(error.response.data.message);
      console.log(error);
    }
  };
function ModeEditP() {
  const userdata = useLoaderData();
  const {
    first_name,
    social_links,
    last_name,
    email,
    phone,
    bio,
    street_address,
    city,
    zip_code,
    country,
  } = { ...userdata };
  const errorse = useSelector((state) => state.userState.error);
  const { facebook, linkedin, twitter, instagram } = { ...social_links };
  const [shwopass, setshowpss] = useState(false);
  const handelshowpass = () => {
    setshowpss(!shwopass);
  };
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="flex w-full items-center cursor-pointer justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 lg:inline-flex lg:w-auto">
            <svg
              className="fill-current"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.0911 2.78206C14.2125 1.90338 12.7878 1.90338 11.9092 2.78206L4.57524 10.116C4.26682 10.4244 4.0547 10.8158 3.96468 11.2426L3.31231 14.3352C3.25997 14.5833 3.33653 14.841 3.51583 15.0203C3.69512 15.1996 3.95286 15.2761 4.20096 15.2238L7.29355 14.5714C7.72031 14.4814 8.11172 14.2693 8.42013 13.9609L15.7541 6.62695C16.6327 5.74827 16.6327 4.32365 15.7541 3.44497L15.0911 2.78206ZM12.9698 3.84272C13.2627 3.54982 13.7376 3.54982 14.0305 3.84272L14.6934 4.50563C14.9863 4.79852 14.9863 5.2734 14.6934 5.56629L14.044 6.21573L12.3204 4.49215L12.9698 3.84272ZM11.2597 5.55281L5.6359 11.1766C5.53309 11.2794 5.46238 11.4099 5.43238 11.5522L5.01758 13.5185L6.98394 13.1037C7.1262 13.0737 7.25666 13.003 7.35947 12.9002L12.9833 7.27639L11.2597 5.55281Z"
                fill=""
              ></path>
            </svg>
            Edit
          </Button>
        </DialogTrigger>
        <Form method="POST">
          <DialogContent  className="sm:max-w-[625px] dark:bg-gray-900">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </DialogDescription>
            </DialogHeader>
            <Form
              method="POST"
              encType="multipart/form-data"
              className="flex flex-col pb-2"
            >
              <div className="custom-scrollbar h-[450px] overflow-y-auto px-2">
                <div>
                  <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                    Update imge
                  </h5>
                  <div className="dropzone  hover:border-success/50 dark:hover:border-brand-500 rounded-xl border border-dashed border-gray-300 bg-gray-50 p-7 lg:p-10 dark:border-gray-700 dark:bg-gray-900 dz-clickable">
                    <div className="dz-message m-0 ">
                      <label htmlFor="image">
                        <div className="mb-[20px] flex justify-center">
                          <div className="flex h-[68px] w-[68px]  items-center justify-center rounded-full bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-400">
                            <svg
                              className="fill-current"
                              width="29"
                              height="28"
                              viewBox="0 0 29 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M14.5019 3.91699C14.2852 3.91699 14.0899 4.00891 13.953 4.15589L8.57363 9.53186C8.28065 9.82466 8.2805 10.2995 8.5733 10.5925C8.8661 10.8855 9.34097 10.8857 9.63396 10.5929L13.7519 6.47752V18.667C13.7519 19.0812 14.0877 19.417 14.5019 19.417C14.9161 19.417 15.2519 19.0812 15.2519 18.667V6.48234L19.3653 10.5929C19.6583 10.8857 20.1332 10.8855 20.426 10.5925C20.7188 10.2995 20.7186 9.82463 20.4256 9.53184L15.0838 4.19378C14.9463 4.02488 14.7367 3.91699 14.5019 3.91699ZM5.91626 18.667C5.91626 18.2528 5.58047 17.917 5.16626 17.917C4.75205 17.917 4.41626 18.2528 4.41626 18.667V21.8337C4.41626 23.0763 5.42362 24.0837 6.66626 24.0837H22.3339C23.5766 24.0837 24.5839 23.0763 24.5839 21.8337V18.667C24.5839 18.2528 24.2482 17.917 23.8339 17.917C23.4197 17.917 23.0839 18.2528 23.0839 18.667V21.8337C23.0839 22.2479 22.7482 22.5837 22.3339 22.5837H6.66626C6.25205 22.5837 5.91626 22.2479 5.91626 21.8337V18.667Z"
                                fill=""
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </label>
                      <input
                        className="hidden"
                        type="file"
                        id="image"
                        name="photo"
                        placeholder=""
                        accept="image/*"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                    Social Links
                  </h5>

                  <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                        Facebook
                      </label>
                      <input
                        name="facebook"
                        type="text"
                        defaultValue={
                          facebook ?? "https://www.facebook.com/PimjoHQ"
                        }
                        className="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                        X.com
                      </label>
                      <input
                        name="twitter"
                        type="text"
                        defaultValue={twitter ?? "https://x.com/PimjoHQ"}
                        className="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                        Linkedin
                      </label>
                      <input
                        name="linkedin"
                        type="text"
                        defaultValue={
                          linkedin ?? "https://linkedin.com/PimjoHQ"
                        }
                        className="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                        Instagram
                      </label>
                      <input
                        name="instagram"
                        type="text"
                        defaultValue={
                          instagram ?? "https://instagram.com/PimjoHQ"
                        }
                        className="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-7">
                  <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                    Personal Information
                  </h5>

                  <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                    <div className="col-span-2 lg:col-span-1">
                      <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                        First Name
                      </label>
                      <input
                        name="first_name"
                        type="text"
                        defaultValue={first_name ?? "fname"}
                        className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                      />
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                      <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                        Last Name
                      </label>
                      <input
                        name="last_name"
                        type="text"
                        defaultValue={last_name ?? "lname"}
                        className="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                      />
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                      <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                        Email Address
                      </label>
                      <input
                        name="email"
                        type="text"
                        defaultValue={email ?? "randomuser@pimjo.com"}
                        className="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                      />
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                      <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                        Phone
                      </label>
                      <input
                        name="phone"
                        type="text"
                        defaultValue={phone ?? "+09 363 398 46"}
                        className="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                      />
                    </div>

                    <div className="col-span-2">
                      <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                        Bio
                      </label>
                      <input
                        name="bio"
                        type="text"
                        defaultValue={bio ?? "Team Manager"}
                        className="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                      />
                    </div>
                    <div className="col-span-2">
                      <button
                        type="button"
                        onClick={handelshowpass}
                        className="flex flex-col items-center justify-center gap-2 rounded-lg border border-gray-300 bg-gray-900 px-4 py-3 text-sm font-medium text-white hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
                      >
                        Change password
                      </button>
                    </div>
                    {shwopass ? (
                      <>
                        <div className="col-span-2 lg:col-span-1">
                          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                            New Password
                          </label>
                          <input
                            name="password"
                            type="password"
                            placeholder="••••••••"
                            autoComplete="frflr"
                            className="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                          />
                          {errorse.password != null ? (
                            <span className="text-sm text-error/75 ">
                              {errorse.password[0]}
                            </span>
                          ) : null}
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                            Confirm password
                          </label>
                          <input
                            name="password_confirmation"
                            placeholder="••••••••"
                            type="text"
                            className="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                          />
                          {errorse.password_confirmation != null ? (
                            <span className="text-sm text-error/75 ">
                              {errorse.password_confirmation[0]}
                            </span>
                          ) : null}
                        </div>
                      </>
                    ) : null}
                    <div className="col-span-2 lg:col-span-1">
                      <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                        Country
                      </label>
                      <input
                        name="country"
                        type="text"
                        defaultValue={country ?? "United States"}
                        class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                      />
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                      <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                        City/State
                      </label>
                      <input
                        name="city"
                        type="text"
                        defaultValue={city ?? "Arizona, United States."}
                        class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                      />
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                      <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                        Postal Code
                      </label>
                      <input
                        name="zip_code"
                        type="text"
                        defaultValue={zip_code ?? "ERT 2489"}
                        class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                      />
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                      <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                        TAX ID
                      </label>
                      <input
                        name="street_address"
                        type="text"
                        defaultValue={street_address ?? "AS4568384"}
                        class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <DialogFooter className="mt-5">
                <DialogClose asChild>
                  <Button className="dark:bg-gray-800" variant="outline">
                    Cancel
                  </Button>
                </DialogClose>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </Form>
          </DialogContent>
        </Form>
      </Dialog>
    </>
  );
}

export default ModeEditP;
