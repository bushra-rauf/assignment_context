'use client'

import { ICountries } from "@/lib/interfaces";
import { getAllCountries } from "@/services/apiMealDb";
import Link from "next/link";
import { useEffect, useState } from "react";

const Countries = () => {
    const [allCountries, setAllCountries] = useState<ICountries | null>(null);

    useEffect(() => {
        const fetcher = async () => setAllCountries(await getAllCountries());
        fetcher();

    }, [])


    return (
        <div className="grid grid-rows-3 grid-cols-3 gap-2 mt-2">
            {allCountries && allCountries.meals.map((item,index )=> <Link className="text-center" href={`/countries/${item.strArea}`} key={index}>{item.strArea}</Link>)}
        </div>
    )
}

export default Countries;