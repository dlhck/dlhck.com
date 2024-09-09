import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import {PropsWithChildren} from "react";
import {Navbar} from "@/components/layout/navbar";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const dankMono = localFont({
    variable: '--font-dank-mono',
    src: [
        {
            path: "./fonts/DankMono-Bold.ttf",
            weight: '700',
        },
        {
            path: "./fonts/DankMono-Regular.ttf",
            weight: '400',
        },
        {
            path: "./fonts/DankMono-Italic.ttf",
            weight: "400",
            style: 'italic',
        }
    ]
});

export default function RootLayout({
                                       children,
                                   }: Readonly<PropsWithChildren>) {
    return (
        <html lang="en" className={`${geistSans.variable} ${dankMono.variable} antialiased`}>
        <body>
        <Navbar></Navbar>
        <div className="py-10">
            {children}
        </div>
        </body>
        </html>
    );
}
