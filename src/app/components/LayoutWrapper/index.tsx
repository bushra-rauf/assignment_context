'use client';

import { useUser } from "@/contexts/userContext";
import { redirect, usePathname } from "next/navigation";
import Header from "../Header";
import Menu from "../Menu";



const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
    const { user } = useUser();
    const pathName = usePathname();

    return (
        <>
            {!user.name && pathName !== '/login' && redirect('/login')}
            {pathName === '/login' ?
                children :
                <>
                    <Header />
                    <div className="flex flex-col">
                        <Menu />
                        <main className="">{children}</main>
                    </div>
                </>

            }
        </>

    )
}

export default LayoutWrapper;