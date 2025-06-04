import axios from "axios";

const productionUrl = "https://shop.motorscloud.net/api";

export const customFetch = axios.create({
  baseURL: productionUrl,
});

export const formatPrice = (price) => {
  const dollarsquantity = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));
  return dollarsquantity;
};
export const sterTitel = (str) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
export const setstring = (Username) => {
  return Username.toUpperCase().slice(0, 1);
};
export async function getProduct(URL) {
  try {
    const reqest = await axios.get(URL);
    return reqest.data.data;
  } catch {
    return console.error("error");
  }
}
export async function getSingelProduct(URL) {
  try {
    const reqest = await axios.get(URL);
    return reqest.data.data;
  } catch {
    return console.error("error");
  }
}
export const generatequantityOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const quantity = index + 1;
    return (
      <option key={quantity} value={quantity}>
        {quantity}
      </option>
    );
  });
};
export const setCookie = (cname, cvalue, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};
export const getCookie = (cname) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};
export const generateRandomInteger = (min, max) => {
  return Math.floor(min + Math.random() * (max - min + 1));
};
