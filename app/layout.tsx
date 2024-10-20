import React from "react";
import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
import { Providers } from "../providers/Providers";
import { Navbar } from "../components/navbar/Navbar";
import { PageAnimation } from "@/components/helpers/PageAnimation";
import { Toaster } from "@/components/ui/sonner";
import { Footer } from "@/components/footer/Footer";

import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
    title: "LangCards",
    description: "Learn languages with flashcards",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Providers>
            <html lang="en" className="dark">
                <body className={`${inter.className}`}>
                    <NextTopLoader showSpinner={false} color="#6366f1" />
                    <Navbar />

                    <main>
                        <PageAnimation>{children}</PageAnimation>
                    </main>

                    <Footer />
                    <Toaster richColors />
                </body>
            </html>
        </Providers>
    );
}
