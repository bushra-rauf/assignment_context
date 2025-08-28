'use client'

import { useUser } from "@/contexts/userContext";
import { ICategories, IMeals, IRecipe } from "@/lib/interfaces";
import { getAllCategories, getSpecificRecipe } from "@/services/apiMealDb";
import { useEffect, useState } from "react";
import CategoryPreviewItem from "../components/CategoryPreviewItem";
import MyCornerRecipeItem from "../components/MyCornerRecipe";

const MyCorner = () => {
    const [categories, setCategories] = useState<ICategories | null>(null);
    const { user } = useUser();

    useEffect(() => {
        if (user.favCat) {
            const fetcher = async () => setCategories(await getAllCategories());
            fetcher();
        }

    }, [])

    return (
        <div className="flex flex-col h-full">
            <h2>{user.name}</h2>
            <div className="flex">
                <div className="flex-[1_0_50] bg-amber-800">
                    <h3>Favourite category</h3>
                    {categories ? <div>{categories.categories.map(item => item.strCategory === user.favCat &&
                        <CategoryPreviewItem key={item.idCategory} {...item} />)}</div>
                        : <div> No Favourite yet</div>}
                </div>
                <div className="flex-[1_0_50] bg-amber-500">
                    <h3>Favourite recipes</h3>
                    {user.favRecipes && user.favRecipes.map(item => <MyCornerRecipeItem key={item.id} {...item}/>)}

                </div>
            </div>

        </div>
    )
}

export default MyCorner;