import Typography from "@/components/ui/typography";
import Link from "next/link";

export default function DisclaimerPage() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">
            <Typography variant="h2">Disclaimer</Typography>

            <Typography variant="p" className="text-muted-foreground">
                Last updated: June 9, 2025
            </Typography>

            <Typography variant="h3">General Information</Typography>
            <Typography variant="p" className="text-muted-foreground">
                The information provided on{" "}
                <Link
                    href="https://www.onepaper.site/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline hover:text-primary/80"
                >
                    https://www.onepaper.site/
                </Link>
                , is for general informational purposes only.
            </Typography>

            <Typography variant="h3">No Professional Advice</Typography>
            <Typography variant="p" className="text-muted-foreground">
                The content on our site — including MCQs, educational resources, and explanations — is intended solely for learning and exam preparation. It does not constitute professional, legal, or academic advice. Please consult with qualified experts when needed.
            </Typography>

            <Typography variant="h3">Accuracy of Information</Typography>
            <Typography variant="p" className="text-muted-foreground">
                We do our best to ensure all content is accurate and updated. However, we do not guarantee that all information is free of errors or fully complete.
            </Typography>

            <Typography variant="h3">Third-Party Links</Typography>
            <Typography variant="p" className="text-muted-foreground">
                Our website may link to third-party websites that we do not control. We are not responsible for the content, accuracy, or privacy practices of these external sites. Users should access them at their own risk.
            </Typography>

            <Typography variant="h3">Contact Us</Typography>
            <Typography variant="p" className="text-muted-foreground">
                If you have questions or concerns about this Disclaimer, feel free to contact us.
            </Typography>
        </div>
    );
}
