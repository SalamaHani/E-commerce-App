import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
function Reivwe({ Reaviw }) {
  const pages = Array.from({ length: 5 }, (_, index) => {
    return index + 1;
  });
  const Reting = Reaviw;
  // <FaStarHalfAlt key={item} className="text-yellow-400" />
  return (
    <>
      <div className="flex items-center gap-x-1">
        {pages.map((item) => {
          if (Reaviw == item || Reaviw > item) {
            return (
              <FaStar key={item} className="text-yellow-400" />
              // <svg
              //   key={item}
              //   className="ms-0.5  text-yellow-400 RRXFBumaW2SHdseZaWm6 eUuXwBkW5W4__eatjSfd boXknXpUJpd4EFsKw7Be"
              //   aria-hidden="true"
              //   xmlns="http://www.w3.org/2000/svg"
              //   width="24"
              //   height="24"
              //   fill="currentColor"
              //   viewBox="0 0 24 24"
              // >
              //   <path
              //     id={item}
              //     name="reviw"
              //     d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
              //   ></path>
              // </svg>
            );
          } else {
            return (
              <FaStar key={item} className="text-gray-300" />
              // <svg
              //   key={item}
              //   className="ms-0.5  text-gray-300 RRXFBumaW2SHdseZaWm6 eUuXwBkW5W4__eatjSfd boXknXpUJpd4EFsKw7Be"
              //   aria-hidden="true"
              //   xmlns="http://www.w3.org/2000/svg"
              //   width="24"
              //   height="24"
              //   fill="currentColor"
              //   viewBox="0 0 24 24"
              // >
              //   <path
              //     name="reviw"
              //     d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
              //   ></path>
              // </svg>
            );
          }
        })}
      </div>
    </>
  );
}

export default Reivwe;
