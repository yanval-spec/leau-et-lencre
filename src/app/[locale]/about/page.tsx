import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutPage() {
    const t = useTranslations("About");

    return (
        <div className="min-h-screen pt-8 pb-16 px-4 max-w-4xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl text-cherry mb-12 text-center">{t("title")}</h1>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src="/images/IMG_0447.jpg"
                        alt="Atelier"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Text Content */}
                <div className="space-y-6">
                    <p className="font-sans text-lg text-gray-700 leading-relaxed">
                        {t("intro")}
                    </p>
                    <p className="font-sans text-gray-600 leading-relaxed">
                        {t("technique")}
                    </p>
                    <div className="w-16 h-1 bg-gradient-to-r from-cherry via-horizon to-twilight rounded-full"></div>
                </div>
            </div>
        </div>
    );
}
