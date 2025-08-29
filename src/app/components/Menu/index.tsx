import Link from "next/link";

const Menu = () => {
    return (
        <menu className="border-b-amber-700 border-b  text-2xl ">
            <ul className="flex justify-evenly">
                <li ><Link href='/'>Home</Link></li>
                <li ><Link href='/category'>By Category</Link></li>
                <li ><Link href='/countries'>By Country</Link></li>
                <li ><Link className="" href='/mycorner'>My Corner</Link></li>
            </ul>
        </menu>
    )
}

export default Menu;