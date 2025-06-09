import Typography from "@/components/ui/typography"
import Link from "next/link"

export default function SiteFooter() {
    return (
        <footer className="border-t bg-white/90 backdrop-blur-sm text-muted-foreground mt-10">
            <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm">

                {/* Left: Copyright */}
                <Typography variant="p" className="text-xs text-muted-foreground text-center sm:text-left">
                    © {new Date().getFullYear()} <span>ONEPAPER.SITE</span>
                </Typography>

                {/* Right: Footer Links */}
                <div className="flex flex-wrap justify-center sm:justify-end gap-x-6 gap-y-2 text-primary font-medium">
                    <Link href="/privacy-policy" className="hover:underline transition">
                        Privacy Policy
                    </Link>
                    <Link href="/disclaimer" className="hover:underline transition">
                        Disclaimer
                    </Link>
                    <Link href="/copyright-policy" className="hover:underline transition">
                        Copyright Policy
                    </Link>
                    <Link href="/about-us" className="hover:underline transition">
                        About Us
                    </Link>
                </div>
            </div>
        </footer>
    )
}
