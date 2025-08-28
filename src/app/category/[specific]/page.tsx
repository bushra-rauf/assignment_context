'use client'

import { IMeals } from "@/lib/interfaces";
import { getSpecificCategory } from "@/services/apiMealDb";
import Link from "next/link";
import { useEffect, useState } from "react";


let mealsData: IMeals | null
const Specific = ({ params }: { params: Promise<{ specific: string }> }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetcher = async () => {
            setIsLoading(true);
            const { specific } = await params;
            mealsData = await getSpecificCategory(specific);
            console.log(mealsData);
            setIsLoading(false);
        }
        fetcher();
    }, [params])

    if (isLoading) return <div>is loading...</div>
    return (
        <div>
            {mealsData && mealsData.meals?.map(item => <Link href={`/recipes/${item.idMeal}`} key={item.idMeal}>{item.strMeal}</Link>)}
        </div>
    )

}

export default Specific;