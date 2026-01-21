import { useTranslations } from "next-intl";
import { Mail, Instagram } from "lucide-react";

export default function ContactPage() {
    const t = useTranslations("Contact");

    return (
        <div className="min-h-screen pt-8 pb-16 px-4 max-w-2xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl text-cherry mb-12 text-center">{t("title")}</h1>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
                <p className="font-sans text-lg text-gray-700 text-center leading-relaxed">
                    {t("intro")}
                </p>

                {/* Email */}
                <div className="flex flex-col items-center space-y-2">
                    <div className="flex items-center gap-2 text-gray-500">
                        <Mail size={20} />
                        <span className="font-sans text-sm uppercase tracking-wide">{t("email")}</span>
                    </div>
                    <a
                        href="mailto:contact@leauetlencre.art"
                        className="font-serif text-xl text-horizon hover:text-cherry transition-colors"
                    >
                        contact@leauetlencre.art
                    </a>
                </div>

                {/* Social */}
                <div className="flex flex-col items-center space-y-4">
                    <div className="flex items-center gap-2 text-gray-500">
                        <Instagram size={20} />
                        <span className="font-sans text-sm uppercase tracking-wide">{t("social")}</span>
                    </div>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-gradient-to-r from-cherry to-horizon text-white rounded-full font-sans text-sm hover:opacity-90 transition-opacity"
                    >
                        @leauetlencre
                    </a>
                </div>

                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-twilight to-transparent rounded-full mx-auto opacity-60"></div>
            </div>
        </div>
    );
}
