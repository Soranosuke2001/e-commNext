export type ProductType = {
  id: string;
  name: string;
  image: string;
  unit_amount: number | null;
  metadata: MetadataType;
  quantity?: number | 1;
  description: string | null;
};

export type MetadataType = {
  features: string;
};
