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

export const orders = [
  {
    date: "2021-10-10",
    total: "$10,000",
    address: "19 W Lancaster Ave, Ardmore, PA 19003",
    good_vid: "123r234123",
  },
  {
    date: "2021-10-10",
    total: "$10,000",
    address: "19 W Lancaster Ave, Ardmore, PA 19003",
    good_vid: "123r234123",
  },
];
