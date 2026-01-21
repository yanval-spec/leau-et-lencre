"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

export default function Navbar({ locale }: { locale: string }) {
    const t = useTranslations("Navbar");
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen(!isOpen);

    const switchLocale = (newLocale: "fr" | "en") => {
        router.replace(pathname, { locale: newLocale });
    };

    const navLinks = [
        { href: "/", label: t("home") },
        { href: "/portfolio", label: t("portfolio") },
        { href: "/about", label: t("about") },
        { href: "/contact", label: t("contact") },
    ];

    return (
        <nav className="fixed w-full z-50 bg-paper/90 backdrop-blur-sm border-b border-gray-100 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="font-serif text-2xl tracking-wider text-cherry">
                        L'Eau et l'Encre
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="font-sans text-sm tracking-wide text-gray-700 hover:text-horizon transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}

                        {/* Language Switcher */}
                        <div className="flex space-x-2 border-l pl-4 border-gray-300">
                            <button
                                onClick={() => switchLocale("fr")}
                                className={clsx(
                                    "font-sans text-xs font-bold transition-colors",
                                    locale === "fr" ? "text-cherry" : "text-gray-400 hover:text-gray-600"
                                )}
                            >
                                FR
                            </button>
                            <button
                                onClick={() => switchLocale("en")}
                                className={clsx(
                                    "font-sans text-xs font-bold transition-colors",
                                    locale === "en" ? "text-cherry" : "text-gray-400 hover:text-gray-600"
                                )}
                            >
                                EN
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-gray-700 hover:text-cherry">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-paper absolute w-full border-b border-gray-100">
                    <div className="px-4 pt-2 pb-4 space-y-1 sm:px-3 flex flex-col items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 font-serif text-xl text-gray-800 hover:text-cherry"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="flex space-x-4 mt-4 pt-4 border-t border-gray-100 w-full justify-center">
                            <button
                                onClick={() => { switchLocale("fr"); setIsOpen(false); }}
                                className={clsx(
                                    "font-sans text-sm font-bold",
                                    locale === "fr" ? "text-cherry" : "text-gray-400"
                                )}
                            >
                                FR
                            </button>
                            <button
                                onClick={() => { switchLocale("en"); setIsOpen(false); }}
                                className={clsx(
                                    "font-sans text-sm font-bold",
                                    locale === "en" ? "text-cherry" : "text-gray-400"
                                )}
                            >
                                EN
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
