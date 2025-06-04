import React from "react";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router";
// import { useQueryClient } from "@tanstack/react-query";
import { styled } from "styled-components";
function ContenetPagination() {
  const { meta } = useLoaderData();
  const { current_page, last_page } = meta;
  const pages = Array.from({ length: last_page }, (_, index) => {
    return index + 1;
  });
  const { pathname, search } = useLocation();
  const navgeit = useNavigate();
  const handelNavgete = (pageNmbar) => {
    //   const queryClient = useQueryClient();
    // queryClient.removeQueries(["products"]);
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNmbar);
    navgeit(`${pathname}?${searchParams}`);
  };
  if (last_page <= 1) {
    return "";
  }

  return (
    <Wrapper>
      <nav aria-label="Page  navigation example dark:bg-[#252525]">
        <div className="inline-flex -space-x-px text-base h-10">
          <button
            onClick={() => {
              let prevpage = current_page - 1;
              if (prevpage < 1) prevpage = last_page;
              handelNavgete(prevpage);
            }}
            className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Prev
          </button>
          {pages.map((val) => {
            return (
              <button
                key={val}
                onClick={() => handelNavgete(val)}
                className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${val == current_page ? "Activ" : ""}`}
              >
                {val}
              </button>
            );
          })}
          <button
            onClick={() => {
              let nextpage = current_page + 1;
              if (nextpage > last_page) nextpage = 1;
              handelNavgete(nextpage);
            }}
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </button>
        </div>
      </nav>
    </Wrapper>
  );
}

export default ContenetPagination;
const Wrapper = styled.section`
  .Activ {
    background-color: oklch(0.208 0.042 265.755);
    color: white;
  }
  .Campny .activ {
    background-color: #e1e1e1;
  }
`;
