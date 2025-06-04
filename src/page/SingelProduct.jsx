import { customFetch } from "../Util";
import ProductDeitels from "../components/ProductDeitels";

const SingelProductQuery = (id) => {
  return {
    queryKey: ["singleProduct", id],
    queryFn: () => customFetch(`/products/${id}`),
  };
};
// eslint-disable-next-line react-refresh/only-export-components
export const loader =
  (store, queryClient) =>
  async ({ params }) => {
    try {
      const respons = await queryClient.ensureQueryData(
        SingelProductQuery(params.IDProduct)
      );
      const product = respons.data;
      return product;
    } catch (error) {
      console.log(error);
    }
  };


function SingelProduct() {
  return (
    <>
      <ProductDeitels />
    </>
  );
}

export default SingelProduct;
