import { useUser } from "@/contexts/userContext";
import Link from "next/link";

const CountryItem = ({ strArea }: { strArea: string }) => {
    const { user, addCountry, deleteCountry } = useUser();

    const handleClick = () => {
        if (user.favCountries.includes(strArea))
            deleteCountry(strArea)
        else
            addCountry(strArea)
    }


    return (
        <div>
            <button className={`cursor-pointer ${user.favCountries.includes(strArea) ? 'bg-amber-200' : 'bg-amber-500'}`} onClick={handleClick}>{user.favCountries.includes(strArea) ? 'Remove from favourites' : 'Add to favourites'}</button>
            <Link href={`/countries/${strArea}`} className="border border-black flex items-center justify-evenly cursor-pointer hover:bg-amber-100">
                <h2 className="text-2xl">{strArea}</h2>
            </Link>
        </div>
    )
}

export default CountryItem;