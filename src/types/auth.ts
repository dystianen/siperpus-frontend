import { GeneralResponse } from "./general";

export type requestLoginTypes = {
  email: string;
  password: string;
};

type resLoginTypes = {
  token: string;
};
export type responseLoginTypes = GeneralResponse<resLoginTypes>;

export type requestRegisterTypes = {
  user_name: string;
  email: string;
  password: string;
  address: string;
};

type resRegisterTypes = {
  token: string;
};
export type responseRegisterTypes = GeneralResponse<resRegisterTypes>;

