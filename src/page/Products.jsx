import Fielter from "../components/Fielter";
import { styled } from "styled-components";
import { customFetch } from "../Util";
import ContenerProduct from "../components/ContenerProduct";
import { Outlet } from "react-router";
import Compelxpagination from "../components/Compelxpagination";
const url = "/products";
const AllProductsQuery = (queryParams) => {
  const { search, category, brand, price, shipping } = queryParams;
  return {
    queryKey: [
      "products",
      search ?? "",
      category ?? "all",
      brand ?? "all",
      price ?? 0,
      shipping ?? false,
    ],
    queryFn: () =>
      customFetch(url, {
        params: queryParams,
      }),
  };
};

// eslint-disable-next-line react-refresh/only-export-components
export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const respose = await queryClient.ensureQueryData(AllProductsQuery(params));
    const products = respose.data.data;
    const brands = respose.data.brands;
    const categories = respose.data.categories;
    const meta = respose.data;
    return { products, brands, categories, params, meta };
  };

function Products() {
  return (
    <Wrapper className="waper">
      <div className="container  products dark:bg-gray-900 flex-2/12">
        <Fielter />
        <ContenerProduct />
      </div>
      <div className="container mt-2  flex justify-end pb-15">
        <Compelxpagination />
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .products {
    /* display: grid;
    gap: 2rem 1.5rem;
    margin: 2rem auto; */
  }
  @media (min-width: 768px) {
    .products {
      /* grid-template-columns: 290px 1fr; */
    }
  }
  img {
    height: 175px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 1040px) {
    .products {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
  .upline {
    width: 100%;
    height: 5px;
    background-color: red;
  }
  @media (min-width: 1170px) {
    .products {
      grid-template-columns: 290px 1fr;
    }
  }
`;

export default Products;
