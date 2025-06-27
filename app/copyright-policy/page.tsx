import Typography from "@/components/ui/typography";
import Link from "next/link";

export default function CopyrightPage() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">
            <Typography variant="h2">Copyright Policy</Typography>

            <Typography variant="p" className="text-muted-foreground">
                Last updated: June 9, 2025
            </Typography>

            <Typography variant="h3">Our Content</Typography>
            <Typography variant="p" className="text-muted-foreground">
                Everything you see on{" "}
                <Link
                    href="https://www.onepaper.site/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline hover:text-primary/80"
                >
                    www.onepaper.site
                </Link>{" "}
                — including MCQs, explanations, text, and images — is either created by the OnePaper team or shared by contributors. This content is protected by copyright and intellectual property laws.
                Please don’t copy, share, or reuse anything from our site without permission.
            </Typography>

            <Typography variant="h3">How to Report a Copyright Issue</Typography>
            <Typography variant="p" className="text-muted-foreground">
                If you believe that something on our website violates your copyright, you can let us know. Please send us the following details so we can look into it quickly:
            </Typography>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>
                    <strong>What’s been copied:</strong> A short description of the content that you believe is infringing your rights.
                </li>
                <li>
                    <strong>Where it appears:</strong> Share the exact link or page where the content is located.
                </li>
                <li>
                    <strong>Your contact info:</strong> Please include your full name, email, address, and phone number.
                </li>
                <li>
                    <strong>Statement of good faith:</strong> A note saying you believe this content wasn’t authorized by you or the copyright holder.
                </li>
                <li>
                    <strong>Authorization confirmation:</strong> Confirm that the information you provided is accurate and that you have the right to act on behalf of the copyright owner.
                </li>
            </ul>

            <Typography variant="h3">Reach Out</Typography>
            <Typography variant="p" className="text-muted-foreground">
                If you have any copyright-related questions or want to report an issue, feel free to contact us anytime. We’re here to help.
            </Typography>
        </div>
    );
}
