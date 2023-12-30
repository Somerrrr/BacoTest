export interface Good {
  id: string;
  imgs: string;
  title: string;
  detail: string;
  specifications: string;
  price: number;
  status: number;
  create_time: Date;
  update_time: Date;
  view_id: string;
}
export interface Order {
  id: number;
  user_vid: string;
  status: number;
  create_time: Date;
  update_time: Date;
  address_vid: string;
  product_vid: string;
  view_id: string;
}
export interface Address {
  id: number;
  address: string;
  status: number;
  create_time: Date;
  update_time: Date;
  view_id: string;
  user_view_id: string;
}
