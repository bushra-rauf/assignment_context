'use client'

import { IMeals } from "@/lib/interfaces";
import { useEffect, useState } from "react";


let mealsData: IMeals;
const Specific = ({ params }: { params: Promise<{ specific: string }> }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetcher = async () => {
            setIsLoading(true);
            const { specific } = await params;
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${specific}`);
            const data = await res.json();
            mealsData = data;
            setIsLoading(false);
        }
        fetcher();
    }, [])

    if (isLoading) return <div>is loading...</div>
    return (
        <div>
            {mealsData && mealsData.meals.map(item => <p key={item.idMeal}>{item.strMeal}</p>)}
        </div>
    )

}

export default Specific;