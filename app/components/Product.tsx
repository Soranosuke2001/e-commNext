import Image from "next/image"

import formatPrice from "@/util/priceFormat"
import { ProductType } from "@/types/ProductType"

export default function Product({ name, image, price }: ProductType) {
    return (
        <div>
            <Image src={image} alt='product image' width={400} height={400} />
            <h1>{name}</h1>
            {formatPrice(price)}
        </div>
    )
}