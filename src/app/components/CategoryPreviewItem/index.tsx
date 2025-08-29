'use client'

import { useUser } from "@/contexts/userContext";
import { ICategory } from "@/lib/interfaces";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

interface CategoryPreviewItem extends ICategory {
    hidebutton?: boolean
}

const CategoryPreviewItem = ({ strCategoryThumb, strCategory, strCategoryDescription, idCategory, hidebutton }: CategoryPreviewItem): ReactElement => {
    const { user, updateCategory } = useUser();

    return (
        <div className="bg-black/50 hover:bg-black/30 text-white">
            <button className={`${hidebutton ? 'hidden' : ''} ${user.favCat === strCategory ? 'bg-gray-500' : 'bg-gray-900'} p-2 rounded-md`} onClick={() => updateCategory(strCategory)}>{user.favCat === strCategory ? 'You current favourite' : 'Add as favourite'}</button>
            <Link href={`/category/${strCategory}`} className="border border-black flex items-center justify-evenly cursor-pointe">
                <Image className="w-auto" src={strCategoryThumb} width={200} height={200} alt={strCategory} />
                <h2 className="text-2xl">{strCategory}</h2>
            </Link>
        </div>
    )
}

export default CategoryPreviewItem;