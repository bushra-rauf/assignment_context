'use client'

import { ICategories, ICategory } from "@/lib/interfaces";
import { useEffect, useState } from "react";
import CategoryPreviewItem from "../components/CategoryPreviewItem";


const Category = () => {
    const [categories, setCategories] = useState<ICategories | null>(null);

    useEffect(() => {
        const fetcher = async () => {
            const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
            const data = await res.json();
            setCategories(data);
        }
        fetcher();
    }, [])

    return (
        <div className="grid grid-rows-3 grid-cols-3 gap-2 mt-2">
            {categories && categories.categories.map(item => <CategoryPreviewItem  key={item.idCategory} {...item} /> )}
        </div>
    )
}

export default Category;