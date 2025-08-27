import { ICategory } from "@/lib/interfaces";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

const CategoryPreviewItem = ({ strCategoryThumb, strCategory, strCategoryDescription, idCategory }: ICategory): ReactElement => {
    return (
        <Link href={`/category/${strCategory}`} className="border border-black flex items-center justify-evenly cursor-pointer hover:bg-amber-100">
            <Image className="w-auto" src={strCategoryThumb} width={200} height={200} alt={strCategory} />
            <h2 className="text-2xl">{strCategory}</h2>
        </Link>
    )
}

export default CategoryPreviewItem;