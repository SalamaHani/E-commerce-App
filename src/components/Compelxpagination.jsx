import React from "react";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router";
import { styled } from "styled-components";
import { useQueryClient } from "@tanstack/react-query";
function Compelxpagination() {
  const { meta } = useLoaderData();
  const { current_page, last_page, total } = meta;
  const { pathname, search } = useLocation();
  //   const pages = Array.from({ length: pageCount }, (_, index) => {
  //     return index + 1;
  //   });
  const Navgetpage = useNavigate();
  const handelNavgetePage = (pageNmbar) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNmbar);
    Navgetpage(`${pathname}?${searchParams.toString()}`);
  };
  const queryClient = useQueryClient();
  const handelquery = () => {
    queryClient.removeQueries({ queryKey: ["products"] });
  };
  const addPageButton = ({ pageNumber, activeClass }) => {
    return (
      <button
        key={pageNumber}
        onClick={() => {
          handelquery();
          handelNavgetePage(pageNumber);
        }}
        className={`'flex items-center justify-center px-4 h-10 leading-tight text-gray-500  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-200 dark:hover:text-white' ${
          activeClass ? "bg-black dark:bg-gray-900 " : ""
        }`}
      >
        {pageNumber}
      </button>
    );
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    // first button
    pageButtons.push(
      addPageButton({ pageNumber: 1, activeClass: current_page === 1 })
    );

    // dots
    if (current_page > 2) {
      pageButtons.push(
        <button
          className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white"
          key="dots-1"
        >
          ...
        </button>
      );
    }

    // active/current page
    if (current_page !== 1 && current_page !== last_page) {
      pageButtons.push(
        addPageButton({ pageNumber: current_page, activeClass: true })
      );
    }
    // dots
    if (current_page < last_page - 1) {
      pageButtons.push(
        <button
          className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400  dark:hover:text-white"
          key="dots-2"
        >
          ...
        </button>
      );
    }

    // last button
    pageButtons.push(
      addPageButton({
        pageNumber: last_page,
        activeClass: current_page === last_page,
      })
    );
    return pageButtons;
  };

  if (last_page < 2) return null;
  if (total < 10) {
    return null;
  }

  return (
    <Wrapper>
      <div className="container mt-2  flex justify-end pb-15">
        <nav aria-label="Page flex flex-row-reverse  mt-5  navigation example dark:bg-[#252525]">
          <div className="inline-flex mt-16 -space-x-px text-base h-10">
            <button
              onClick={() => {
                let prevpage = current_page - 1;
                if (prevpage < 1) prevpage = last_page;
                handelquery();
                handelNavgetePage(prevpage);
              }}
              className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Prev
            </button>
            {renderPageButtons()}
            <button
              onClick={() => {
                let nextpage = current_page + 1;
                if (nextpage > last_page) nextpage = 1;
                handelquery();
                handelNavgetePage(nextpage);
              }}
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </button>
          </div>
        </nav>
      </div>
    </Wrapper>
  );
}
export default Compelxpagination;
const Wrapper = styled.section`
  .Activ {
    background-color: black;
    color: white;
  }
  .Campny .activ {
    background-color: #e1e1e1;
  }
`;
