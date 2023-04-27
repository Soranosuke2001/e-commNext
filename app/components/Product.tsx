import Image from "next/image"

import formatPrice from "@/util/priceFormat"
import { ProductType } from "@/types/ProductType"

export default function Product({ name, image, price }: ProductType) {
    return (
        <div>
            <Image className='w-full h-80 object-cover' src={image} alt='product image' width={800} height={800} />
            <h1>{name}</h1>
            {formatPrice(price)}
        </div>
    )
}