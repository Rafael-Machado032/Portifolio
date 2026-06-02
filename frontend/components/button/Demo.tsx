import { ExternalLink } from "lucide-react";

export default function Demo({ href }: { href: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.75 text-white dark:text-black bg-[#00858c] dark:bg-[#00f2fe] rounded-lg font-bold transition-all duration-300 dark:hover:bg-[#00d8e4] hover:shadow-[0_0_20px_rgba(0,133,140,0.6)] dark:hover:shadow-[0_0_20px_rgba(0,242,242,0.6)] hover:-translate-y-1"
        >
            <ExternalLink size={18} />
            Visualizar
        </a>
    );
}
