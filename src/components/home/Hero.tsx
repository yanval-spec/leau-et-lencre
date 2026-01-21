"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    const t = useTranslations("Home");

    return (
        <section className="relative h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/IMG_0443.jpg"
                    alt="L'Eau et l'Encre Hero"
                    fill
                    className="object-cover opacity-90"
                    priority
                />
                <div className="absolute inset-0 bg-paper/60 backdrop-blur-[2px]"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="font-serif text-5xl md:text-7xl lg:text-8xl text-cherry mb-6 drop-shadow-sm"
                >
                    {t("title")}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="font-handwritten text-3xl md:text-5xl text-gray-800"
                >
                    {t("subtitle")}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-12"
                >
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-horizon to-transparent mx-auto rounded-full opacity-80"></div>
                </motion.div>
            </div>
        </section>
    );
}
