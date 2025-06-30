import { Footer, Navbar } from "@/components/layout";
import React from "react";

export default function WwwLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="min-h-full bg-white">
                <Navbar />
                <main className="h-full w-full">
                    {children}
                </main>
                <Footer />
            </div>
        </>
    )
}