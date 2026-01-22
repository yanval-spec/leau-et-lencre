export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-8 mt-auto bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-500 font-sans text-sm">
                <p>© {currentYear} L&apos;Eau et l&apos;Encre. All rights reserved.</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="hover:text-cherry transition-colors">Instagram</a>
                    <a href="#" className="hover:text-cherry transition-colors">Contact</a>
                </div>
            </div>
        </footer>
    );
}
