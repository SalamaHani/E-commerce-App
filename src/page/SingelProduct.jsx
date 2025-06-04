import { customFetch } from "../Util";
import ProductDeitels from "../components/ProductDeitels";
import { Form } from "react-router";
import { toast } from "sonner";
import { redirect } from "react-router";
import { seterrorsmasge, handelreves } from "../features/User/userSlice";

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
      const respones = await customFetch.get(`/products/${params.IDProduct}/`);
      const Reviews = respones.data;
      const product = respons.data;
      return { product, Reviews };
    } catch (error) {
      console.log(error);
    }
  };
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
      store.dispatch(handelreves());
    } catch (error) {
      store.dispatch(seterrorsmasge(error.response.data.errors));
      toast(error.response.data.message);
    }
  };
function SingelProduct() {
  return (
    <>
      <Form method="post">
        <ProductDeitels />
      </Form>
    </>
  );
}

export default SingelProduct;
