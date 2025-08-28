'use client';

import { useUser } from "@/contexts/userContext";
import Header from "../Header";
import Menu from "../Menu";
import Login from "../Login";



const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
    const { user } = useUser();

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