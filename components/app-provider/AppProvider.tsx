'use client';

import { PropsWithChildren } from "react";
import { CookiesProvider } from "react-cookie";

export const AppProvider = ({ children }: PropsWithChildren) => (
    <CookiesProvider defaultSetOptions={{ path: '/'}}>
        {children}
    </CookiesProvider>
);