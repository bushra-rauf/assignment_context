import { useUser } from "@/contexts/userContext";
import { ICountry } from "@/lib/interfaces";
import Link from "next/link";

const CountryItem = ({ strArea }: { strArea: string }) => {
    const { user, addCountry, deleteCountry } = useUser();

    const country:ICountry = {country: strArea};
    const handleClick = () => {
        if (user.favCountries.find(el => el.country === country.country))
            deleteCountry(country.country)
        else
            addCountry(country)
    }

    return (
        <div>
            <button className={`cursor-pointer ${user.favCountries.find(el => el.country === country.country) ? 'bg-amber-200' : 'bg-amber-500'}`} onClick={handleClick}>{user.favCountries.find(el => el.country === country.country) ? 'Remove from favourites' : 'Add to favourites'}</button>
            <Link href={`/countries/${strArea}`} className="border border-black flex items-center justify-evenly cursor-pointer hover:bg-amber-100">
                <h2 className="text-2xl">{country.country}</h2>
            </Link>
        </div>
    )
}

export default CountryItem;