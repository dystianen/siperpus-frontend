import { getCookie } from "cookies-next";
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
  const authToken = getCookie("authToken");
  if (authToken) {
    const data: JwtPayload = jwtDecode(authToken);
    return data;
  }
};
