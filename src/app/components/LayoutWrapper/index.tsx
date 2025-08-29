'use client';

import { useUser } from "@/contexts/userContext";
import Header from "../Header";
import Menu from "../Menu";
import Login from "../Login";



const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
    const { user } = useUser();

    return (
        <>
            <div className="flex flex-col h-full">
                {!user.name ?
                    <Login /> :
                    <>
                        <Header />
                        <div className="flex flex-col grow">
                            <Menu />
                            <main className="grow flex flex-col">{children}</main>
                        </div>
                    </>
                }
            </div>

        </>
    
    )
}

export default LayoutWrapper;