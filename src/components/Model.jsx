import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Form, useLoaderData } from "react-router";
import { useDispatch } from "react-redux";
import { customFetch } from "../Util";
import { toast } from "sonner";
import {
  UpdateDatauser,
  toogelModeleidt,
  seterrorsmasge,
} from "../features/User/userSlice";
import { redirect } from "react-router";
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
      console.log(request);
    } catch (error) {
      store.dispatch(seterrorsmasge(error.response.data.errors));
      toast.error(error.response.data.message);
      console.log(error);
    }
  };
function Model() {
  const isopenmodel = useSelector((state) => state.userState.ismodeleidt);
  const dispatch = useDispatch();
  const handelediet = () => {
    dispatch(toogelModeleidt());
  };
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
      <div
        x-show="isProfileInfoModal "
        className={
          isopenmodel
            ? `"fixed flex inset-0  items-center justify-center p-5 overflow-y-auto z-99999"`
            : `" hidden inset-0  items-center justify-center p-5 overflow-y-auto z-99999"`
        }
      >
        <div className="modal-close-btn fixed inset-0 h-full w-full bg-gray-400/50 backdrop-blur-[32px]"></div>
        <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
          <button className="transition-color absolute right-5 top-5 z-999 flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-gray-600  dark:text-gray-400 dark:hover:bg-white/[0.07] dark:hover:text-gray-300">
            <svg
              className="fill-current"
              onClick={handelediet}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.04289 16.5418C5.65237 16.9323 5.65237 17.5655 6.04289 17.956C6.43342 18.3465 7.06658 18.3465 7.45711 17.956L11.9987 13.4144L16.5408 17.9565C16.9313 18.347 17.5645 18.347 17.955 17.9565C18.3455 17.566 18.3455 16.9328 17.955 16.5423L13.4129 12.0002L17.955 7.45808C18.3455 7.06756 18.3455 6.43439 17.955 6.04387C17.5645 5.65335 16.9313 5.65335 16.5408 6.04387L11.9987 10.586L7.45711 6.04439C7.06658 5.65386 6.43342 5.65386 6.04289 6.04439C5.65237 6.43491 5.65237 7.06808 6.04289 7.4586L10.5845 12.0002L6.04289 16.5418Z"
                fill=""
              ></path>
            </svg>
          </button>
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Edit Personal Information
            </h4>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
              Update your details to keep your profile up-to-date.
            </p>
          </div>
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
                      defaultValue={linkedin ?? "https://linkedin.com/PimjoHQ"}
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
            <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
              <button
                type="button"
                onClick={handelediet}
                className="flex w-full justify-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] sm:w-auto"
              >
                Close
              </button>
              <button
                type="submit"
                className="flex w-full justify-center rounded-lg bg-black dark:bg-gray-800 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 sm:w-auto"
              >
                Save Changes
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Model;
