'use client'

import { useUser } from "@/contexts/userContext";
import { ICategories} from "@/lib/interfaces";
import { getAllCategories } from "@/services/apiMealDb";
import { useEffect, useState } from "react";
import CategoryPreviewItem from "../components/CategoryPreviewItem";
import MyCornerListItem from "../components/MyCornerListItem";

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
        <div className="flex flex-col h-full bg-[url(/login.webp)] text-white" >
            <h2 className="bg-black/50 border-b-1 border-amber-50 text-3xl p-4 text-center"> Hello,{user.name}! Here you can find your saved favourites.</h2>
            <div className="flex h-full">
                <div className="flex-[1_0_33] bg-black/50 ">
                    <h3 className="text-center text-2xl p-2 mb-2">Favourite category</h3>
                    {categories ? <div>{categories.categories.map(item => item.strCategory === user.favCat &&
                        <CategoryPreviewItem key={item.idCategory} {...item} hidebutton={true} />)}</div>
                        : <p className="px-2"> No favourite category yet</p>}
                </div>  
                <div className="flex-[1_0_33] bg-black/50 border-l-1 border-amber-50">
                    <h3 className="text-center text-2xl p-2 mb-2">Favourite recipes</h3>
                    {user.favRecipes.length > 0 ? user.favRecipes.map(item => <MyCornerListItem key={item.id} {...item}/>)
                    : <p className="px-2">No favourite recipe yet</p>}

                </div>
                  <div className="flex-[1_0_33] bg-black/50 border-l-1 border-amber-50">
                    <h3 className="text-center text-2xl p-2 mb-2">Favourite countries</h3>
                    {user.favCountries.length > 0 ? user.favCountries.map(item => <MyCornerListItem key={item.country} name={item.country}/>)
                    : <p className="px-2">No favourite country yet</p>}

                </div>
            </div>
        </div>
    )
}

export default MyCorner;