import Image from "next/image";

import formatPrice from "@/util/priceFormat";
import { ProductType } from "@/types/ProductType";
import Link from "next/link";

export default function Product({ name, image, price, id }: ProductType) {
  return (
    <Link href={`/${id}`}>
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
          <h2 className="text-sm text-teal-700">{formatPrice(price)}</h2>
        </div>
      </div>
    </Link>
  );
}
