'use client';

import { useUser } from "@/contexts/userContext";
import { redirect, RedirectType, usePathname } from "next/navigation";
import Header from "../Header";
import Menu from "../Menu";
import Login from "../Login";



const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
    const { user } = useUser();
    const pathName = usePathname();
    // pathName !== '/login' && redirect('/login', RedirectType.replace)}
    //         {pathName === '/login' ?

    return (
        <>

            {!user.name ?
               <Login /> :
                <>
                    <Header />
                    <div className="flex flex-col">
                        <Menu />
                        <main className="h-full">{children}</main>
                    </div>
                </>
            }

        </>

    )
}

export default LayoutWrapper;