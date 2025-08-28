'use client'

import { useUser } from "@/contexts/userContext";
import Link from "next/link";

const MyCornerRecipeItem = ({ id, name }: { id: string, name: string }) => {
    const { deleteRecipe } = useUser();
    return (
        <div className="flex justify-between">
            <Link href={`/recipes/${id}`} >{name}</Link>
            <button className="cursor-pointer" onClick={() => deleteRecipe(id)}>Remove</button>
        </div>
    )
}

export default MyCornerRecipeItem;