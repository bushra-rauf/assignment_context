import Link from "next/link";

const Menu = () => {
    return (
        <menu className="border-b-amber-700 border-b  text-2xl ">
            <ul className="flex justify-evenly">
                <li ><Link href='/category'>By Category</Link></li>
                <li ><Link href='/country'>By Country</Link></li>
                <li ><Link className=" bg-amber-300" href='/mycorner'>My Corner</Link></li>
            </ul>
        </menu>
    )
}

export default Menu;