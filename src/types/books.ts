import { GeneralResponse } from "./general";

export type bookTypes = {
  book_id: string;
  category_id: string;
  title: string;
  writer: string;
  publisher: string;
  year_publication: string;
  synopsis: string;
  thumbnail: string;
  stock: string;
  collection_id: string;
  is_save: boolean;
  rating: number;
  created_at: Date;
  updated_at: Date;
  deleted_at: null;
};
export type responseBookTypes = GeneralResponse<bookTypes[]>;

type category = {
  category_id: string;
  category_name: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: null;
};
export type responseCategoryTypes = GeneralResponse<category[]>;

type reviewTypes = {
  review_id: string;
  user_id: string;
  book_id: string;
  review: string;
  rating: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: null;
};
export type responseReviewTypes = GeneralResponse<reviewTypes[]>;
