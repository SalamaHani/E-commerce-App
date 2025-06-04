import Reivwe from "./Reivwe";
import ActionReview from "./ActionReview";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handelreves } from "../features/User/userSlice";
function SetReviw() {
  const Reviewe = Array.from({ length: 5 }, (_, index) => {
    return index + 1;
  });
  const [contreview, setcontreview] = useState(0);
  const user = useSelector((state) => state.userState.user);
  const handelreview = (e) => {
    setcontreview(e.target.id);
  };
  const dispatch = useDispatch();
  const handelclose = () => {
    dispatch(handelreves());
  };
  const errorse = useSelector((state) => state.userState.error);
  return (
    <>
      <div className="col-span-12 space-y-6 xl:col-span-8 mt-20">
        <div className="rounded-2xl border border-gray-200 bg-white px-5  pt-5 pb-0 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6 ">
          <div className="px-5 py-4 sm:px-6 sm:py-5">
            <h2 className="text-base font-medium text-gray-800 dark:text-white/90">
              Add a Review
            </h2>
          </div>
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
                  <input type="hidden" name="author_name" value={user.name} />
                  <input type="hidden" name="rating" value={contreview} />
                  <button
                    type="submit"
                    className="flex flex-col items-center justify-center gap-2 rounded-lg border border-gray-300 bg-gray-900 px-4 py-3 text-sm font-medium text-white hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
                  >
                    Save Changes
                  </button>

                  <button
                    onClick={handelclose}
                    className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SetReviw;
