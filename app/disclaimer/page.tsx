import Typography from "@/components/ui/typography";
import Link from "next/link";

export default function DisclaimerPage() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">
            <Typography variant="h2">Disclaimer</Typography>

            <Typography variant="p" className="text-muted-foreground">
                Last updated: June 9, 2025
            </Typography>

            <Typography variant="h3">For Your Information</Typography>
            <Typography variant="p" className="text-muted-foreground">
                The content shared on{" "}
                <Link
                    href="https://www.onepaper.site/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline hover:text-primary/80"
                >
                    www.onepaper.site
                </Link>{" "}
                is meant to help students and job seekers prepare for competitive exams. Everything you find here is shared with the intent to educate and support — not to offer official advice or services.
            </Typography>

            <Typography variant="h3">Not Professional Advice</Typography>
            <Typography variant="p" className="text-muted-foreground">
                All the MCQs, explanations, and study material on this site are here for learning purposes only. If you're looking for legal, academic, or expert guidance, it’s always best to talk to a qualified professional.
            </Typography>

            <Typography variant="h3">Accuracy and Updates</Typography>
            <Typography variant="p" className="text-muted-foreground">
                We work hard to keep the information on our site accurate and up to date. But we’re human, and sometimes mistakes happen. If you notice something that doesn’t seem right, feel free to let us know.
            </Typography>

            <Typography variant="h3">Links to Other Websites</Typography>
            <Typography variant="p" className="text-muted-foreground">
                Sometimes, we might link to other websites that we think could be useful. Please note that we don’t control these sites and can’t guarantee their content or privacy practices. If you choose to visit them, you do so at your own discretion.
            </Typography>

            <Typography variant="h3">Get in Touch</Typography>
            <Typography variant="p" className="text-muted-foreground">
                Have a question about this disclaimer? Just reach out — we’re here to help.
            </Typography>
        </div>
    );
}
