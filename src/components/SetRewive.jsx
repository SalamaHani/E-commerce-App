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
import { Button } from "@/components/ui/button";
import { Form } from "react-router";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import { redirect } from "react-router";
import { seterrorsmasge } from "../features/User/userSlice";
import { customFetch } from "@/Util";
// eslint-disable-next-line react-refresh/only-export-components
export const action =
  (store) =>
  async ({ request, params }) => {
    const user = store.getState().userState.user;
    if (!user) {
      toast.warn("You must be logged in to Reviews");
      return redirect("/Login");
    }
    const formData = await request.formData();
    const Data = Object.fromEntries(formData);
    try {
      const respone = await customFetch.post(
        `/products/${params.IDProduct}/reviews`,
        { ...Data },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      toast.success(respone.data.message);
      return redirect(`/products/${params.IDProduct}`);
    } catch (error) {
      store.dispatch(seterrorsmasge(error.response.data.errors));
      toast(error.response.data.message);
    }
  };
export function SetRewive() {
  const Reviewe = Array.from({ length: 5 }, (_, index) => {
    return index + 1;
  });
  const [contreview, setcontreview] = useState(0);
  const user = useSelector((state) => state.userState.user);
  const handelreview = (e) => {
    setcontreview(e.target.id);
  };
  const errorse = useSelector((state) => state.userState.error);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="flex md:mb-0 mb-4 w-[30%]  items-center mt-5 md:mt-0 justify-center py-2.5 px-5 text-sm font-medium text-white focus:outline-none bg-black rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-black focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Write a Customer review
        </Button>
      </DialogTrigger>
      <Form method="POST" encType="multipart/form-data">
        <DialogContent className="sm:max-w-[725px]">
          <DialogHeader>
            <DialogTitle> Add a Review</DialogTitle>
            <DialogDescription>
              Make to your Review Product here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <Form
            method="POST"
            encType="multipart/form-data"
            className="flex flex-col pb-2"
          >
            <div className="grid gap-4">
              <div className="p-5 space-y-6 border-t border-gray-100  dark:border-gray-800 sm:p-6">
                <div className="-mx-2.5 flex flex-wrap gap-y-5">
                  <div className="w-full px-2.5 ">
                    <div className="kqgYncRJQ7spwKfig6It flex  neyUwteEn7DOg9pBSJJE">
                      {Reviewe.map((item) => {
                        if (contreview == item || contreview > item) {
                          return (
                            <svg
                              key={item}
                              className="ms-0.5 cursor-pointer hover:text-yellow-400  text-yellow-400 RRXFBumaW2SHdseZaWm6 eUuXwBkW5W4__eatjSfd boXknXpUJpd4EFsKw7Be"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                onClick={handelreview}
                                name="Review"
                                id={item}
                                d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                              ></path>
                            </svg>
                          );
                        } else {
                          return (
                            <svg
                              key={item}
                              className="ms-0.5  cursor-pointer hover:text-yellow-400 text-gray-300 RRXFBumaW2SHdseZaWm6 eUuXwBkW5W4__eatjSfd boXknXpUJpd4EFsKw7Be"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                onClick={handelreview}
                                id={item}
                                name="Review"
                                d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                              ></path>
                            </svg>
                          );
                        }
                      })}
                    </div>
                    {errorse.rating != null ? (
                      <span className="text-sm text-error/75 ">
                        {errorse.rating[0]}
                      </span>
                    ) : null}
                  </div>
                  <div className="w-full px-2.5">
                    <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                      comment Review
                    </label>
                    <textarea
                      name="comment"
                      placeholder="Type Enter text  Coment Review "
                      rows="6"
                      className="dark:bg-dark-900 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    ></textarea>
                    {errorse.comment != null ? (
                      <span className="text-sm text-error/75 ">
                        {errorse.comment[0]}
                      </span>
                    ) : null}
                  </div>
                </div>
                <div className="col-span-12 space-y-6 xl:col-span-12">
                  <div className="flex justify-end">
                    <div className="flex items-center gap-3 mt-1">
                      <input
                        type="hidden"
                        name="author_name"
                        value={user.name}
                      />
                      <input type="hidden" name="rating" value={contreview} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <DialogClose asChild>
                <Button type="submit">Save changes</Button>
              </DialogClose>
            </DialogFooter>
          </Form>
        </DialogContent>
      </Form>
    </Dialog>
  );
}
