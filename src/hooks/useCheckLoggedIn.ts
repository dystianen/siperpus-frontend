import { hasCookie } from "cookies-next";


export const useCheckLoggedIn = () => {
  const isAuthToken = hasCookie("authToken");
  return isAuthToken;
};
