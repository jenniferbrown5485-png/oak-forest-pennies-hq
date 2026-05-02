create table inventory (
  id uuid primary key default gen_random_uuid(),
  upc text unique,
  product_name text,
  category text,
  bin_location text,
  quantity int default 0
);
