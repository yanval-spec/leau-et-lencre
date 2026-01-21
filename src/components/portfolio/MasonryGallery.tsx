"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { artworks, ArtworkCategory } from "@/data/artworks";
import clsx from "clsx";

const categories: { key: ArtworkCategory | "all"; labelFr: string; labelEn: string }[] = [
    { key: "all", labelFr: "Tout", labelEn: "All" },
    { key: "fantastique", labelFr: "Mondes Fantastiques", labelEn: "Fantasy Worlds" },
    { key: "ghibli", labelFr: "Inspirations Ghibli", labelEn: "Ghibli Inspired" },
    { key: "paysages", labelFr: "Paysages", labelEn: "Landscapes" },
    { key: "portraits", labelFr: "Portraits & Scènes", labelEn: "Portraits & Scenes" },
];

export default function MasonryGallery({ locale }: { locale: string }) {
    const [filter, setFilter] = useState<ArtworkCategory | "all">("all");
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const filteredArtworks = filter === "all"
        ? artworks
        : artworks.filter((art) => art.category === filter);

    return (
        <div>
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((cat) => (
                    <button
                        key={cat.key}
                        onClick={() => setFilter(cat.key)}
                        className={clsx(
                            "px-5 py-2 rounded-full font-sans text-sm transition-all duration-300",
                            filter === cat.key
                                ? "bg-cherry text-white shadow-md"
                                : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                        )}
                    >
                        {locale === "fr" ? cat.labelFr : cat.labelEn}
                    </button>
                ))}
            </div>

            {/* Masonry Grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                <AnimatePresence mode="popLayout">
                    {filteredArtworks.map((artwork) => (
                        <motion.div
                            key={artwork.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="break-inside-avoid group cursor-pointer"
                            onClick={() => setSelectedImage(artwork.id)}
                        >
                            <div className="relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-xl transition-shadow duration-300">
                                <Image
                                    src={artwork.src}
                                    alt={locale === "fr" ? artwork.title.fr : artwork.title.en}
                                    width={600}
                                    height={artwork.aspect === "landscape" ? 400 : artwork.aspect === "portrait" ? 800 : 600}
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <h3 className="font-serif text-white text-lg">
                                        {locale === "fr" ? artwork.title.fr : artwork.title.en}
                                    </h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", damping: 25 }}
                            className="relative max-w-5xl max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {(() => {
                                const artwork = artworks.find((a) => a.id === selectedImage);
                                if (!artwork) return null;
                                return (
                                    <>
                                        <Image
                                            src={artwork.src}
                                            alt={locale === "fr" ? artwork.title.fr : artwork.title.en}
                                            width={1200}
                                            height={800}
                                            className="max-h-[85vh] w-auto object-contain rounded-lg"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                                            <h2 className="font-serif text-white text-2xl">
                                                {locale === "fr" ? artwork.title.fr : artwork.title.en}
                                            </h2>
                                        </div>
                                    </>
                                );
                            })()}
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors"
                            >
                                ✕
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
