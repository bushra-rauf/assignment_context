'use client'

import { useUser } from "@/contexts/userContext";
import { ICategory } from "@/lib/interfaces";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

const CategoryPreviewItem = ({ strCategoryThumb, strCategory, strCategoryDescription, idCategory }: ICategory): ReactElement => {
    const { user, updateCategory } = useUser();

    return (
        <div>
            <button className={` ${user.favCat === strCategory ? 'bg-amber-200' : 'bg-amber-500'}`} onClick={() => updateCategory(strCategory)}>{user.favCat === strCategory ? 'You current favourite' : 'Add as favourite'}</button>
            <Link href={`/category/${strCategory}`} className="border border-black flex items-center justify-evenly cursor-pointer hover:bg-amber-100">
                <Image className="w-auto" src={strCategoryThumb} width={200} height={200} alt={strCategory} />
                <h2 className="text-2xl">{strCategory}</h2>
            </Link>
        </div>
    )
}

export default CategoryPreviewItem;