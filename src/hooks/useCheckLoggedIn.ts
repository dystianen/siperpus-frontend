import { readLocalStorageValue } from "@mantine/hooks";

export const useCheckLoggedIn = () => {
  const token = readLocalStorageValue({ key: "authToken" });
  return !!token;
};
