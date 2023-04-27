import Image from "next/image";

import formatPrice from "@/util/priceFormat";
import { ProductType } from "@/types/ProductType";
import Link from "next/link";

export default function Product({
  name,
  image,
  unit_amount,
  id,
  description,
  metadata,
}: ProductType) {
  return (
    <Link
      href={{
        pathname: `/product/${id}`,
        query: { name, image, unit_amount, id, description },
      }}
    >
      <div className="text-gray-700">
        <Image
          className="w-full h-80 object-cover rounded-lg"
          src={image}
          alt="product image"
          width={800}
          height={800}
        />
        <div className="font-medium py-2">
          <h1>{name}</h1>
          <h2 className="text-sm text-teal-700">{formatPrice(unit_amount)}</h2>
        </div>
      </div>
    </Link>
  );
}
