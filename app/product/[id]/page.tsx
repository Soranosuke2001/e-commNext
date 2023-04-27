import { SearchParamType } from "@/types/SearchParamType";
import Image from "next/image";

export default async function Product({ searchParams }: SearchParamType) {
  return (
    <div className="flex justify-between gap-24 p-12 text-gray-700">
      <Image
        src={searchParams.image}
        alt="product image"
        width={600}
        height={600}
      />
      <div>
        <h1>{searchParams.name}</h1>
        {/* <p>{searchParams.decription}</p> */}
      </div>
    </div>
  );
}
