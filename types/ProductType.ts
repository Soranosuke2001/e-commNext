export type ProductType = {
  name: string;
  image: string;
  unit_amount: number | null;
  id: string;
  metadata: MetadataType;
};

type MetadataType = {
  features: string;
};
