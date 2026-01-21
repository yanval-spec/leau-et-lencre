import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import { Playfair_Display, Caveat, Inter } from "next/font/google";
import "../globals.css";

const serif = Playfair_Display({
    variable: "--font-serif",
    subsets: ["latin"],
});

const handwritten = Caveat({
    variable: "--font-handwritten",
    subsets: ["latin"],
});

const sans = Inter({
    variable: "--font-sans",
    subsets: ["latin"],
});

export const metadata = {
    title: "L'Eau et l'Encre - Yann V.",
    description: "Portfolio d'artiste Yann V.",
};

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    // Ensure that the incoming `locale` is valid
    if (!(routing.locales as readonly string[]).includes(locale)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className={`${serif.variable} ${handwritten.variable} ${sans.variable} antialiased bg-paper text-gray-900 flex flex-col min-h-screen`}>
                <NextIntlClientProvider messages={messages}>
                    <Navbar locale={locale} />
                    <main className="flex-grow pt-20">
                        {children}
                    </main>
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
