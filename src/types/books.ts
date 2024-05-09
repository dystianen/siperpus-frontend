import { GeneralResponse } from "./general";

export type bookTypes = {
  book_id: string;
  category_id: string;
  category_name: string;
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
export type responseDetailBookTypes = GeneralResponse<bookTypes>;

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

export type collectionTypes = {
  collection_id: string;
  user_id: string;
  book_id: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: null;
  user_name: string;
  email: string;
  password: string;
  address: string;
  role: string;
  category_id: string;
  category_name: string;
  title: string;
  writer: string;
  publisher: string;
  year_publication: string;
  synopsis: string;
  thumbnail: string;
  stock: string;
  is_save: boolean;
  rating: number;
  reviews: reviewTypes[];
};
export type responseCollectionTypes = GeneralResponse<collectionTypes[]>;

export type borrowedTypes = {
  borrow_id: string;
  user_id: string;
  book_id: string;
  confirm_by: null;
  loan_date: Date;
  due_date: Date;
  status: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: null;
  category_id: string;
  title: string;
  writer: string;
  publisher: string;
  year_publication: string;
  synopsis: string;
  thumbnail: string;
  stock: string;
  total_fine: number;
};
export type responseBorrowedTypes = GeneralResponse<borrowedTypes[]>;

type totalFineTypes = {
  total_fine: string
}
export type responseTotalFineTypes = GeneralResponse<totalFineTypes>;
