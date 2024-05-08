import { readLocalStorageValue } from "@mantine/hooks";

export const useCheckLoggedIn = () => {
  const token = readLocalStorageValue({ key: "token" });
  return Boolean(token);
};
