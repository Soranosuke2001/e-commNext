type SearchParams = {
  name: string;
  price: number | null;
  image: string;
  id: string;
};

type Params = {
  id: string;
};

export type SearchParamType = {
  searchParams: SearchParams;
  params: Params;
};
