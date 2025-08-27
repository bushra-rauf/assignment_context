'use client';

import { UserContextProvider } from "@/contexts/userContext";
import LayoutWrapper from "../LayoutWrapper";

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
    return (<>
        <UserContextProvider>
            <LayoutWrapper>{children}</LayoutWrapper>
        </UserContextProvider>
    </>
    )
}

export default LayoutProvider;