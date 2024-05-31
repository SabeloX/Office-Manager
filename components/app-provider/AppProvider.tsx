'use client';

import { AppOfficeProvider } from "@/context/Office.context";
import { PropsWithChildren } from "react";
import { CookiesProvider } from "react-cookie";

export const AppProvider = ({ children }: PropsWithChildren) => (
    <CookiesProvider defaultSetOptions={{ path: '/'}}>
        <AppOfficeProvider>
            {children}
        </AppOfficeProvider>
    </CookiesProvider>
);