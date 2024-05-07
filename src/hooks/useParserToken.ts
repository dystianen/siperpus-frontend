import { readLocalStorageValue } from "@mantine/hooks";
import { jwtDecode } from "jwt-decode";

type JwtPayload = {
  iss: string;
  aud: string;
  sub: string;
  iat: number;
  exp: number;
  user_id: string;
  user_name: string;
  email: string;
  role: string;
};

export const useParserToken = () => {
  const token: string = readLocalStorageValue({ key: "token" });
  if (token) {
    const data: JwtPayload = jwtDecode(token);
    return data;
  }
};
