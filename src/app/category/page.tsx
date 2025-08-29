'use client'

import { ICategories } from "@/lib/interfaces";
import { useEffect, useState } from "react";
import CategoryPreviewItem from "../components/CategoryPreviewItem";
import { getAllCategories } from "@/services/apiMealDb";


const Category = () => {
    const [categories, setCategories] = useState<ICategories | null>(null);

    useEffect(() => {
        const fetcher = async () => setCategories(await getAllCategories());
        fetcher();
    }, [])

    return (
        <div className="bg-gray-600">
            <div className="grid grid-rows-3 grid-cols-3 gap-2 mt-2 bg-black]">
                {categories && categories.categories.map(item => <CategoryPreviewItem key={item.idCategory} {...item} />)}
            </div>
        </div>
    )
}

export default Category;