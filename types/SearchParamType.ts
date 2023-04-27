type SearchParams = {
  name: string;
  unit_amount: number | null;
  image: string;
  id: string;
  description: string | null;
  features: string;
};

type Params = {
  id: string;
};

export type SearchParamType = {
  searchParams: SearchParams;
  params: Params;
};
