import { useTranslations } from "next-intl";
import MasonryGallery from "@/components/portfolio/MasonryGallery";
import { use } from "react";

export default function PortfolioPage({ params }: { params: Promise<{ locale: string }> }) {
    const t = useTranslations("Navbar");
    const { locale } = use(params);

    return (
        <div className="min-h-screen pt-8 pb-16 px-4 max-w-7xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl text-cherry mb-12 text-center">{t("portfolio")}</h1>
            <MasonryGallery locale={locale} />
        </div>
    );
}
